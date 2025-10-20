// app/api/apply-job/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { IncomingForm, Fields, Files } from 'formidable'; 
import { promises as fs } from 'fs';
import path from 'path';
import { Readable } from 'stream'; // Import Node.js stream for compatibility

// Zoho Mail Transport Configuration 
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL_USER,
    pass: process.env.ZOHO_EMAIL_PASS,
  },
  connectionTimeout: 20000, 
  socketTimeout: 30000,
});

// CRITICAL: Next.js API configuration to disable built-in body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

// --------------------------------------------------------------------------
// 🔥 THE ROBUST FIX: Utility function to fully adapt the Web Request for Formidable
// --------------------------------------------------------------------------
const parseForm = (req: Request) => {
    return new Promise<{ fields: Fields, files: Files }>(async (resolve, reject) => {
        
        if (!req.body) {
            return reject(new Error("Request body is empty."));
        }
        
        // 1. Create the Node.js Readable stream from the Web Request body
        const nodeReadableStream = Readable.from(req.body as any);

        // 2. Create the Formidable parser instance
        const form = new IncomingForm({
            maxFileSize: 5 * 1024 * 1024, 
            keepExtensions: true, 
        });

        // 3. Attach the necessary headers and method to the stream object itself.
        // Formidable needs these properties (like 'content-type') to start parsing.
        const headers = Object.fromEntries(req.headers);
        (nodeReadableStream as any).headers = headers;
        (nodeReadableStream as any).method = req.method;

        // 4. Call form.parse() with only ONE stream argument, plus the callback.
        form.parse(nodeReadableStream as any, (err: Error | null, fields: Fields, files: Files) => {
            if (err) {
                console.error('Formidable Error:', err);
                return reject(new Error('File upload failed or exceeded size limit.'));
            }
            resolve({ fields, files });
        });
    });
};
// --------------------------------------------------------------------------

export async function POST(request: Request) {
  if (!process.env.ZOHO_EMAIL_USER || !process.env.RECEIVING_EMAIL) {
    return NextResponse.json({ message: 'Server configuration error: Email credentials or recipient missing.' }, { status: 500 });
  }

  let tempFilePath: string | undefined;

  try {
    const { fields, files } = await parseForm(request);

    // Formidable v3+ returns arrays for field values, so we access the first element
    const fullName = fields.fullName?.[0];
    const email = fields.email?.[0];
    const phone = fields.phone?.[0];
    const resumeFile = files.resume?.[0];

    if (!resumeFile || !fullName || !email) {
        return NextResponse.json({ message: 'Missing required form fields or resume file.' }, { status: 400 });
    }

    tempFilePath = resumeFile.filepath; 

    const attachment = {
        filename: `${fullName.replace(/\s/g, '_')}_Resume${path.extname(resumeFile.originalFilename || '.pdf')}`,
        path: tempFilePath, 
    };

    // Send the email
    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL_USER,
      replyTo: `${fullName} <${email}>`, 
      to: process.env.RECEIVING_EMAIL,
      subject: `NEW JOB APPLICATION: ${fullName} (${email})`,
      
      text: `Applicant: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nResume attached.`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2 style="color: #333;">New Job Application Received</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p style="margin-top: 15px;">Resume is attached to this email.</p>
        </div>
      `,
      attachments: [attachment],
    });

    // Clean up the temporary file
    if (tempFilePath) {
        await fs.unlink(tempFilePath).catch(e => console.error("Could not delete temp file:", e));
    }

    return NextResponse.json({ message: 'Application successfully sent!' }, { status: 200 });
  } catch (error) {
    if (tempFilePath) {
        await fs.unlink(tempFilePath).catch(e => console.error("Could not delete temp file on error:", e));
    }
    
    console.error('Application submission error:', error);
    return NextResponse.json({ message: 'Failed to submit application. Check server logs.' }, { status: 500 });
  }
}
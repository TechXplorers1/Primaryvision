import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { IncomingForm, Fields, Files } from 'formidable'; 
import { promises as fs } from 'fs';
import path from 'path';
import { Readable } from 'stream'; // <-- Re-import Readable to create the Node Stream

// Zoho Mail Transport Configuration 
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL_USER,
    pass: process.env.ZOHO_EMAIL_PASS, // Ensure this is the Zoho App Password
  },
  connectionTimeout: 20000, 
  socketTimeout: 30000,
});

// CRITICAL: Next.js API configuration to disable built-in body parsing
// This tells Next.js NOT to process the request body, leaving it raw for Formidable.
export const config = {
  api: {
    bodyParser: false,
  },
};

// --------------------------------------------------------------------------
// 🔥 FINAL FIX: Bridging Web Request to Node Stream for Formidable
// --------------------------------------------------------------------------
const parseForm = (request: Request) => {
    return new Promise<{ fields: Fields, files: Files }>(async (resolve, reject) => {
        
        if (!request.body) {
            console.error('Request body is undefined.');
            return reject(new Error("Request body is empty, likely due to internal server error or client misconfiguration."));
        }
        
        // 1. Convert the Web Request body (ReadableStream) into a Node.js Readable stream.
        // This is necessary to satisfy Formidable's Node.js stream dependency.
        const nodeReadableStream = Readable.from(request.body as any);

        // 2. Create the Formidable parser instance
        const form = new IncomingForm({
            maxFileSize: 5 * 1024 * 1024, // 5MB limit
            keepExtensions: true, 
        });

        // 3. CRITICAL: Manually attach headers and method to the stream object.
        // Formidable requires these properties (typically found on Node's IncomingMessage) 
        // to correctly determine content type and parse the multi-part form data.
        const headers = Object.fromEntries(request.headers.entries());
        (nodeReadableStream as any).headers = headers;
        (nodeReadableStream as any).method = request.method;

        // 4. Parse the adapted stream
        form.parse(nodeReadableStream as any, (err: Error | null, fields: Fields, files: Files) => {
            if (err) {
                console.error('Formidable Error:', err);
                return reject(new Error('File upload failed (size limit or parsing error).')); 
            }
            resolve({ fields, files });
        });
    });
};
// --------------------------------------------------------------------------

export async function POST(request: Request) {
  // Check 1: Mandatory Environment Variables Check (early exit for config errors)
  if (!process.env.ZOHO_EMAIL_USER || !process.env.ZOHO_EMAIL_PASS || !process.env.RECEIVING_EMAIL) {
    console.error('SERVER ERROR: Email credentials or recipient missing.');
    return NextResponse.json({ message: 'Server configuration error: Email credentials or recipient missing.' }, { status: 500 });
  }

  // Check 2: Verify Nodemailer connection to Zoho SMTP *before* processing form data
  try {
    await transporter.verify();
  } catch (authError) {
    console.error('NODEMAILER AUTHENTICATION FAILED:', authError);
    // Return a 500 error if authentication or connection fails
    return NextResponse.json({ message: 'Email service authentication failed. Check server logs.' }, { status: 500 });
  }

  let tempFilePath: string | undefined;

  try {
    const { fields, files } = await parseForm(request);

    // Formidable v3+ returns arrays for field values, so we access the first element
    const fullName = fields.fullName?.[0];
    const email = fields.email?.[0];
    const phone = fields.phone?.[0];
    // Check if the file was actually uploaded
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
        // Use an inner try/catch for safety, preventing failure after success
        try {
            await fs.unlink(tempFilePath);
        } catch (e) {
            console.error("Could not delete temp file (non-critical):", e);
        }
    }

    return NextResponse.json({ message: 'Application successfully sent!' }, { status: 200 });
  } catch (error) {
    // Clean up the temporary file on error
    if (tempFilePath) {
        try {
             await fs.unlink(tempFilePath);
        } catch (e) {
            console.error("Could not delete temp file on error (non-critical):", e);
        }
    }
    
    console.error('Application submission error:', error);
    // Returning the specific error message caught earlier in the process
    return NextResponse.json({ message: 'Failed to submit application. Check server logs.' }, { status: 500 });
  }
}

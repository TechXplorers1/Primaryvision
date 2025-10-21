import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Type definition for the expected form data
interface QuoteFormData {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string; // This is the user's email
  phone: string;
  typeOfInquiry: string;
}

// Nodemailer transport configuration for Zoho Mail (Remains the same)
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    // These process.env variables MUST be set on your hosting platform!
    user: process.env.ZOHO_EMAIL_USER,    // Your verified Zoho email
    pass: process.env.ZOHO_EMAIL_PASS,    // The App Password
  },
});

export async function POST(request: Request) {
  // Check 1: Mandatory Environment Variables Check (early exit for config errors)
  if (!process.env.ZOHO_EMAIL_USER || !process.env.ZOHO_EMAIL_PASS || !process.env.RECEIVING_EMAIL) {
    console.error('SERVER ERROR: Email configuration missing for deployment. Check ZOHO_EMAIL_USER, ZOHO_EMAIL_PASS, and RECEIVING_EMAIL environment variables.');
    return NextResponse.json({ 
      message: 'Server configuration error: Email service credentials missing.' 
    }, { status: 500 });
  }

  let data: QuoteFormData;

  try {
    // Check 2: Safely parse the request body
    data = await request.json();
  } catch (parseError) {
    console.error('REQUEST ERROR: Failed to parse request body as JSON:', parseError);
    return NextResponse.json({ message: 'Invalid request body format.' }, { status: 400 });
  }

  try {
    const { firstName, lastName, businessName, email, phone, typeOfInquiry } = data;

    // Check 3: Basic Data Validation (optional, but good practice)
    if (!firstName || !email) {
      return NextResponse.json({ message: 'Missing required fields (Name or Email).' }, { status: 400 });
    }

    const mailOptions = {
      // 1. 'from': MUST be your verified ZOHO email (for authentication)
      from: process.env.ZOHO_EMAIL_USER, 
      
      // 2. 'replyTo': Set the customer's email here so you can reply directly to them
      replyTo: `${firstName} ${lastName} <${email}>`, // e.g., "John Doe <john.doe@example.com>"
      
      // 3. 'to': The email where you receive the quote
      to: process.env.RECEIVING_EMAIL, 
      
      subject: `New Quote Request from ${firstName} ${lastName} (${businessName})`,
      
      text: `
        --- NEW QUOTE REQUEST ---
        
        Name: ${firstName} ${lastName}
        Business Name: ${businessName}
        Email: ${email}
        Phone: ${phone}
        
        Inquiry Details:
        ${typeOfInquiry}
        
        -------------------------
      `,
      
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Quote Request Submitted</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 5px 0; font-weight: bold;">Name:</td><td>${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 5px 0; font-weight: bold;">Business Name:</td><td>${businessName}</td></tr>
            <tr><td style="padding: 5px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
            <tr><td style="padding: 5px 0; font-weight: bold;">Phone:</td><td>${phone}</td></tr>
          </table>
          
          <h3 style="margin-top: 20px; color: #555;">Inquiry Details:</h3>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 8px;">${typeOfInquiry}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // This section is what generates the email you see in your other screenshot!
    return NextResponse.json({ message: 'Quote successfully sent!' }, { status: 200 });
  } catch (error) {
    // Catch-all for Nodemailer or general failure
    console.error('NODEMAILER/SERVER FAILURE:', error);
    // Return a generic error message, but the console log will show the exact reason on your host
    return NextResponse.json({ message: 'Failed to send quote request. Please check server logs.' }, { status: 500 });
  }
}

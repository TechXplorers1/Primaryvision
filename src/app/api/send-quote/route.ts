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

// Nodemailer transport configuration for Zoho Mail
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL_USER,    // Your verified Zoho email
    pass: process.env.ZOHO_EMAIL_PASS,    // The App Password
  },
});

export async function POST(request: Request) {
  // Check 1: Mandatory Environment Variables Check
  if (!process.env.ZOHO_EMAIL_USER || !process.env.ZOHO_EMAIL_PASS || !process.env.RECEIVING_EMAIL) {
    console.error('SERVER ERROR: Email configuration missing (User, Pass, or Recipient).');
    return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 });
  }
  
  // Check 2: Verify Nodemailer connection to Zoho SMTP *before* processing form data
  try {
    await transporter.verify();
  } catch (authError) {
    console.error('NODEMAILER AUTHENTICATION FAILED for Quote Request:', authError);
    // Return a 500 error if authentication or connection fails
    return NextResponse.json({ message: 'Email service authentication failed. Check server logs.' }, { status: 500 });
  }

  try {
    const data: QuoteFormData = await request.json();

    const { firstName, lastName, businessName, email, phone, typeOfInquiry } = data;

    const mailOptions = {
      // 1. 'from': MUST be your verified ZOHO email (for authentication)
      from: process.env.ZOHO_EMAIL_USER, 
      
      // 2. 'replyTo': Set the customer's email here so you can reply directly to them
      replyTo: `${firstName} ${lastName} <${email}>`, 
      
      // 3. 'to': The email where you receive the quote
      to: process.env.RECEIVING_EMAIL, 
      
      subject: `New Quote Request from ${firstName} ${lastName}`,
      
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

    return NextResponse.json({ message: 'Quote successfully sent!' }, { status: 200 });
  } catch (error) {
    console.error('Quote sending error:', error);
    return NextResponse.json({ message: 'Failed to send quote request. Please check server logs.' }, { status: 500 });
  }
}

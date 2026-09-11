import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      )
    }

    const smtpUser = process.env.SMTP_USER || 'kumarley.tejas7.tk15@gmail.com'
    const smtpPass = process.env.SMTP_PASS || ''
    const recipientEmail = process.env.CLINIC_EMAIL || smtpUser

    // Create reusable nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Email to Tejas (Admin notification)
    const mailOptions = {
      from: `"${name} (Portfolio Contact)" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject || 'New Message from ' + name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #FFF9F5; border: 1px solid #C9B8FF; border-radius: 20px; color: #2D2A32;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #7C5CFF; margin: 0 0 6px 0; font-size: 24px;">New Portfolio Contact Message</h2>
            <p style="color: #6B6570; margin: 0; font-size: 14px;">Received from your portfolio website</p>
          </div>
          
          <div style="background: #FFFFFF; padding: 20px; border-radius: 16px; border: 1px solid #E4D7FF; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; font-size: 14px;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0; font-size: 14px;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #7C5CFF;">${email}</a></p>
            <p style="margin: 0; font-size: 14px;"><strong>Subject:</strong> ${subject || 'N/A'}</p>
          </div>

          <div style="background: #FFFFFF; padding: 20px; border-radius: 16px; border: 1px solid #E4D7FF;">
            <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold; color: #2D2A32;">Message:</p>
            <div style="white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #4B4652;">${message}</div>
          </div>

          <div style="text-align: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(45,42,50,0.08); font-size: 12px; color: #857F8B;">
            Sent from Tejas Kumarley's Portfolio Contact Form • ${new Date().toLocaleString()}
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully via Nodemailer.' })
  } catch (error: any) {
    console.error('Nodemailer error:', error)
    return NextResponse.json(
      { error: error?.message || 'Failed to send email' },
      { status: 500 }
    )
  }
}

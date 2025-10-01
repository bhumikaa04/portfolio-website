// app/api/contact/route.ts
import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      console.log("Name :" , name); 
      console.log("email :" , email); 
      console.log("msg :" , message); 
      console.log("environment var: mail : " , process.env.EMAIL_USER); 
      console.log("environment var: pass : " , process.env.EMAIL_PASS); 
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      )
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not configured')
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      )
    }

    // Send email (optional - you can test without this first)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Message: ${message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    })

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact API is working!" },
    { status: 200 }
  )
}
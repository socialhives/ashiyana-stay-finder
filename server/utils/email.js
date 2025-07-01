import nodemailer from 'nodemailer';

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Email templates
const templates = {
  'contact-confirmation': (data) => ({
    subject: 'Thank you for contacting NST Hospitality',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Thank you for contacting us!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your ${data.enquiryType} enquiry and will get back to you within 24 hours.</p>
        <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Your Message:</h3>
          <p>${data.message}</p>
        </div>
        <p>Best regards,<br>NST Hospitality Team</p>
        <hr>
        <p style="font-size: 12px; color: #666;">
          NST Hospitality | Sector 11, Faridabad | +91 98765 43210
        </p>
      </div>
    `
  }),
  
  'contact-response': (data) => ({
    subject: 'Response to your inquiry - NST Hospitality',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Response to your inquiry</h2>
        <p>Dear ${data.name},</p>
        <p>Thank you for your patience. Here's our response to your inquiry:</p>
        
        <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Your Original Message:</h3>
          <p>${data.originalMessage}</p>
        </div>
        
        <div style="background: #e0f2fe; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Our Response:</h3>
          <p>${data.response}</p>
        </div>
        
        <p>If you have any further questions, please don't hesitate to contact us.</p>
        <p>Best regards,<br>NST Hospitality Team</p>
        <hr>
        <p style="font-size: 12px; color: #666;">
          NST Hospitality | Sector 11, Faridabad | +91 98765 43210
        </p>
      </div>
    `
  }),
  
  'booking-confirmation': (data) => ({
    subject: 'Booking Confirmation - NST Hospitality',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Booking Confirmation</h2>
        <p>Dear ${data.guestName},</p>
        <p>Your booking has been confirmed! Here are the details:</p>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3>Booking Details:</h3>
          <p><strong>Booking ID:</strong> ${data.bookingId}</p>
          <p><strong>Property:</strong> ${data.propertyName}</p>
          <p><strong>Room Type:</strong> ${data.roomType}</p>
          <p><strong>Check-in:</strong> ${data.checkIn}</p>
          <p><strong>Duration:</strong> ${data.duration}</p>
          <p><strong>Total Amount:</strong> ₹${data.totalAmount}</p>
        </div>
        
        <p>We look forward to hosting you!</p>
        <p>Best regards,<br>NST Hospitality Team</p>
      </div>
    `
  })
};

export const sendEmail = async ({ to, subject, template, data }) => {
  try {
    const transporter = createTransporter();
    
    let emailContent;
    if (template && templates[template]) {
      emailContent = templates[template](data);
    } else {
      emailContent = { subject, html: data.html || data.text };
    }
    
    const mailOptions = {
      from: `"NST Hospitality" <${process.env.EMAIL_USER}>`,
      to,
      subject: emailContent.subject,
      html: emailContent.html
    };
    
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return result;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};
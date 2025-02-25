const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

const sendContactEmail = async (name, email) => {
    console.log("📩 Preparing to send email...");
    console.log("👤 Sending to:", email);
    
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Contact Us Confirmation',
        text: `
Dear ${name},

Thank you for reaching out to us at AAA Digital Services!

We are pleased to inform you that we have received your message. 
Our team is currently reviewing your inquiry, and we will get back to you as soon as possible.

If you have any urgent questions or need immediate assistance, 
please contact us directly at aaadigitaltd@gmail.com or call (+923000431046).

Best regards,
AAA Digital Services
Website: www.aaadigitalservices.com
Phone: +923000431046
Email: aaadigitalltd@gmail.com
        `,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully:", info.response);
    } catch (error) {
        console.error("❌ Error sending email:", error);
    }
};

module.exports = sendContactEmail;

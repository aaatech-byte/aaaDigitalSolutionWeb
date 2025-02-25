const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

const sendContactEmailjobapplication = async (name, email, position) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Applying for job',
            text: `
Dear ${name},

You have applied for the position of ${position}.

We are pleased to inform you that we have received your message. 
Our HR team will review your CV and get back to you as soon.

If you have any urgent questions or need immediate assistance, 
please contact us directly at aaadigitaltd@gmail.com or call (+923000431046).

Best regards,
AAA Digital Services
Website: www.aaadigitalservices.com
Phone: +923000431046
Email: aaadigitalltd@gmail.com
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to:", email);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

module.exports = sendContactEmailjobapplication;

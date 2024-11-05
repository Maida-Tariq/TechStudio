import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/error.js";
import { Contact } from "../models/contactSchema.js";
import { sendEmail } from "../utils/sendMail.js";
import { config } from "dotenv";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
    const { name, email, phone, country, projectDescription } = req.body;
    console.log("Received data:", { name, email, phone, projectDescription }); 

    if (!name || !email || !phone || !projectDescription) {
      return next(new ErrorHandler("Please fill in the full form!", 400));
    }

    try {
        const contact = new Contact({
          name,
          email,
          country,
          phone,
          projectDescription,
        });

        await contact.save();

        // Email to admin with HTML formatting
        const adminSubject = `New Contact Form Submission from ${name}`;
        const adminMessage = `You have received a new message from ${name}.`;
        const adminHtmlContent = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Project Description:</strong> ${projectDescription}</p>
        `;

        await sendEmail(process.env.EMAIL ,
           adminSubject, adminMessage, adminHtmlContent);

        // Auto-reply to the user
        const userSubject = "Thank you for reaching out to us!";
        const userMessage = `Hi ${name},\nThank you for contacting us. We will get back to you soon!`;
        const userHtmlContent = `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2>Thank You for Reaching Out!</h2>
                <p>Dear ${name},</p>
                <p>Thank you for reaching out to us. Here is a summary of your message:</p>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>Country:</strong> ${country}</li>
                    <li><strong>Project Description:</strong> ${projectDescription}</li>
                </ul>
                <p>We will review your request and respond shortly. If you need immediate assistance, please contact us directly at our support email.</p>
                <p>Best regards,<br>Tech Studio Team</p>
            </div>
        `;

        await sendEmail(email, userSubject, userMessage, userHtmlContent);

        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ success: false, message: 'Error saving data', error: error.message });
    }
});

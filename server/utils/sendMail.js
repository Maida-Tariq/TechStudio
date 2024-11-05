import  nodeMailer from "nodemailer";
import { config } from "dotenv";
export const sendEmail = async (email, subject, message)=>{
   
  const  SMTP_MAIL = "zaibimalik7994@gmail.com";
  const SMTP_PASSWORD ="ewsa uhrd yvhv zuvz";
  
    const transporter = nodeMailer.createTransport({
        host:process.env.SMTP_HOST,
        service:process.env.SMTP_SERVICE,
        port:process.env.SMTP_PORT,
        auth:{
            user:SMTP_MAIL,
            pass:SMTP_PASSWORD,
        }
    })

    const options = {
        from:SMTP_MAIL,
        to:email,
        subject:subject,
        text:message,
    }

    await transporter.sendMail(options,)
}
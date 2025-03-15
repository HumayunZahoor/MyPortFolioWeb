import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["https://humayun-portfolio.vercel.app" , "http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
const router = express.Router();


mongoose.connect('mongodb://localhost:27017/portfolio');



// Configure your email transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'humayuncs009@gmail.com',
      pass: 'fpfr hyie nvga prph'
    }
  });
  
  app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
  
    const mailOptions = {
      from: email,
      to: 'humayuncs009@gmail.com',
      subject: '📩 New Contact Form Submission',
      html: `
        <div style="font-family: 'Arial', sans-serif; background-color: #121212; padding: 40px; color: #f8f8f8;">
          <div style="max-width: 600px; background: #1e1e1e; padding: 30px; border-radius: 10px; 
                      box-shadow: 0 4px 10px rgba(255, 165, 0, 0.2); margin: auto;">
            <h2 style="color: #ff8c00; text-align: center; font-size: 24px; margin-bottom: 20px;">
              🚀 Contact Request Received
            </h2>
            
            <hr style="border: none; border-top: 2px solid #ff8c00; width: 120px; margin: auto; margin-bottom: 20px;">
    
            <p style="font-size: 16px; color: #f8f8f8; line-height: 1.6;">
              <strong style="color: #ffae42;">👤 Name:</strong> ${name} <br>
              <strong style="color: #ffae42;">📧 Email:</strong> ${email}
            </p>
    
            <p style="font-size: 16px; color: #ffae42; line-height: 1.6; font-weight: bold;">💬 Message:</p>
    
            <blockquote style="background-color: #262626; padding: 15px; border-left: 5px solid #ff8c00; 
                              font-style: italic; font-size: 15px; color: #f8f8f8; 
                              border-radius: 5px; margin: 15px 0;">
              ${message}
            </blockquote>
    
            <p style="text-align: center; font-size: 14px; color: #bdbdbd; margin-top: 20px;">
              This email was sent via the contact form on your portfolio.
            </p>
          </div>
        </div>
      `
    };
    
      
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
  });

 

  const PORT = process.env.PORT || 3001;

  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
  
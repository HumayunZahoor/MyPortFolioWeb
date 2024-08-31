import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "https://HumayunPortFolio.vercel.app"],
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
      pass: 'sfbf gthc phyc mawt'
    }
  });
  
  app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
  
    const mailOptions = {
        from: email,
        to: 'humayuncs009@gmail.com',
        subject: 'Contact Form (PORTFOLIO)',
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; border-radius: 8px;">
            <h2 style="color: #333;">Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background-color: #fff; border-left: 4px solid #007bff; padding: 10px; margin: 10px 0; border-radius: 4px;">
              ${message}
            </blockquote>
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
  
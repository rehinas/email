const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rehinasm786@gmail.com', 
    pass: process.env.PASS, 
  },
});

router.get('/get', (req, res) => {
  res.send('get request');
});

router.post('/send', async (req, res) => {
  res.send('post request');

  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'rehi@gmail.com', 
    to: to || 'mariya@gmail.com',
    subject: subject || 'Happy note',
    text: text || 'You are always my best friend. I miss you a lot. Every time you make me chill. I miss our college days, and also Arshi, will you meet soon?',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Mail sent:', info.messageId);
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
});

module.exports = router;

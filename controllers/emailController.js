const nodemailer = require('nodemailer');
const contentFetcher = require('../services/contentFetcher');
const emailBuilder = require('../services/emailBuilder');

// Configure email transporter (Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (req, res) => {
  try {
    const { recipientEmail, personalizationText, contentLink } = req.body;

    // Validate input
    if (!recipientEmail || !personalizationText || !contentLink) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: recipientEmail, personalizationText, contentLink',
      });
    }

    console.log(`📧 Processing email for: ${recipientEmail}`);

    // Fetch content from link
    console.log(`🔗 Fetching content from: ${contentLink}`);
    const content = await contentFetcher.fetchContent(contentLink);

    if (!content) {
      return res.status(400).json({
        success: false,
        message: 'Could not fetch content from the provided link',
      });
    }

    // Build email
    const emailHTML = emailBuilder.buildEmail(personalizationText, content);

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: recipientEmail,
      subject: '📬 You have a message',
      html: emailHTML,
    };

    await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent successfully to: ${recipientEmail}`);

    res.json({
      success: true,
      message: `Email sent successfully to ${recipientEmail}`,
    });
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error sending email',
      error: error.message,
    });
  }
};

module.exports = { sendEmail };

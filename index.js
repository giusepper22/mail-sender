const express = require('express');
const dotenv = require('dotenv');
const emailController = require('./controllers/emailController');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.post('/api/send-email', emailController.sendEmail);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Email Bot is running!' });
});

// Serve home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email Bot running on http://localhost:${PORT}`);
  console.log(`📧 API endpoint: POST http://localhost:${PORT}/api/send-email`);
});

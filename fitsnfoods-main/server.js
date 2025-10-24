const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.static('views'));

// Additional static file serving for better compatibility
app.use('/public', express.static('public'));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/fashion', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'fashion.html'));
});

app.get('/food', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'food.html'));
});

app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'upload.html'));
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'game.html'));
});

app.get('/photobooth', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'photobooth.html'));
});

app.post('/upload', upload.single('media'), (req, res) => {
  res.json({ message: 'File uploaded successfully!' });
});

// Test endpoint to check if server is working
app.get('/test', (req, res) => {
  res.json({ 
    message: 'Server is working!', 
    timestamp: new Date().toISOString(),
    files: {
      images: 'public/images/',
      videos: 'public/videos/',
      uploads: 'public/uploads/'
    }
  });
});

// Start server
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;

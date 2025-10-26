const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
// Vercel provides its own port, so we don't need to set it to 5000.

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public'))); // serves /public
app.use('/public', express.static(path.join(__dirname, 'public'))); // also serve as /public for Vercel
app.use('/views', express.static(path.join(__dirname, 'views'))); // serves /views

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/food', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'food.html'));
});

app.get('/fashion', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'fashion.html'));
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

// --- CRITICAL CHANGE FOR VERCEL ---
// Vercel's filesystem is read-only, except for the /tmp directory.
// You cannot save files to 'public/uploads/'.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // We use the /tmp directory for temporary storage
    cb(null, '/tmp/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Upload route
app.post('/upload', upload.single('media'), (req, res) => {
  console.log('File uploaded to /tmp:', req.file);
  // Note: This file is temporary and will be deleted when the function instance is recycled.
  res.send('Upload successful! (File stored temporarily in /tmp)');
});

// --- HANDLE BOTH LOCAL AND VERCEL ---
// Vercel handles starting the server, but we need it for local development
const PORT = process.env.PORT || 5000;

// Start server in development or if not on Vercel
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// --- EXPORT THE APP FOR VERCEL ---
module.exports = app;
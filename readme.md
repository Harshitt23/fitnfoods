# 🍰👗 FitsnFoods - Flavors & Fits

A beautiful web application that combines fashion inspiration and food exploration in one delightful platform. Perfect for college students and young adults who love sharing their style and culinary adventures!

![FitsnFoods Banner](https://img.shields.io/badge/FitsnFoods-Fashion%20%26%20Food-pink?style=for-the-badge&logo=heart)

## ✨ Features

### 🎨 **Fashion Gallery**
- Pinterest-style masonry layout showcasing outfit inspiration
- Categories: Date Night, College Look, Festive Fit, Street Style, Brunch Look, Party Wear, Summer Fit, Casual Combo
- Responsive design with hover animations
- Beautiful glassmorphism UI elements

### 🍕 **Food Exploration**
- Curated food gallery with delicious visuals
- Categories: Burgers, Cupcakes, Pasta, Milkshakes, Pizza, Brunch
- Interactive hover effects and smooth animations
- Mobile-friendly responsive design

### 📸 **Upload System**
- Upload your own fashion looks or food creations
- Support for both images and videos
- Categorized uploads (Fashion/Food)
- Clean, intuitive upload interface

### 🎮 **Cute Runner Game**
- Fun browser-based endless runner game
- Pink-themed aesthetic matching the app
- Score tracking and retry functionality
- Perfect for entertainment between browsing

### 📷 **Photobooth**
- Interactive camera feature
- Filters and effects
- Social sharing capabilities
- Modern glassmorphism design

## 🚀 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS, Custom CSS
- **Backend**: Node.js, Express.js
- **File Upload**: Multer
- **Animations**: Animate.css
- **Fonts**: Google Fonts (Pacifico, Dancing Script, Poppins)

## 📁 Project Structure

```
fitsnfoods-main/
├── views/
│   ├── index.html          # Landing page with video background
│   ├── fashion.html        # Fashion gallery
│   ├── food.html          # Food gallery
│   ├── upload.html        # Upload interface
│   ├── game.html          # Cute runner game
│   └── photobooth.html    # Camera/photobooth feature
├── public/
│   ├── images/            # Fashion and food images
│   ├── videos/            # Background videos
│   └── style.css          # Custom styles
├── package.json           # Dependencies and scripts
└── server.js             # Express server (to be created)
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rishika2324/fitsnfoods.git
   cd fitsnfoods
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create server.js** (if not exists)
   ```javascript
   const express = require('express');
   const multer = require('multer');
   const path = require('path');
   
   const app = express();
   const PORT = process.env.PORT || 3000;
   
   // Middleware
   app.use(express.static('public'));
   app.use(express.static('views'));
   
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
   
   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
   ```

4. **Create uploads directory**
   ```bash
   mkdir public/uploads
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`


## 📱 Features Overview

### 🎨 **Design Philosophy**
- **Glassmorphism**: Modern frosted glass effects
- **Pink & Yellow Theme**: Warm, inviting color palette
- **Responsive**: Works perfectly on all devices
- **Smooth Animations**: Delightful micro-interactions

### 🚀 **Performance**
- Optimized images and videos
- CDN-ready static assets
- Fast loading times
- Mobile-first approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Harshitt23** - *Initial work* - (https://github.com/Harshitt23/fitnfoods.git)

## 🙏 Acknowledgments

- Tailwind CSS for the amazing utility classes
- Animate.css for smooth animations
- Google Fonts for beautiful typography
- All the amazing open-source contributors

## 📞 Support

If you have any questions or need help with deployment, feel free to:

- Open an issue on GitHub
- Contact the maintainer
- Check the Vercel documentation for deployment issues

---

**Made with 💖 for fashion and food lovers!**

⭐ Star this repo if you found it helpful!

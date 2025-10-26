# 🍰 Flavors & Fits 🌸

A beautiful web application showcasing fashion inspiration and delicious food recipes, built with Express.js and modern web technologies.

## ✨ Features

- 🍱 **Food Gallery** - Browse yummy dishes, brunch ideas, and desserts
- 👗 **Fashion Gallery** - Explore outfit inspirations for college, dates, brunch, parties and more
- 🎮 **Interactive Game** - Play the "Cute Runner" game
- 📷 **Photobooth** - Upload photos, create grid layouts with stickers and filters
- 📸 **Upload Posts** - Share your own fashion looks and food creations
- 🎥 **Dynamic Background Videos** - Beautiful video backgrounds for an immersive experience

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Tailwind CSS
- **File Upload**: Multer
- **Deployment**: Vercel
- **Animations**: Animate.css

## 📁 Project Structure

```
fitsnfoods-main/
├── public/
│   ├── images/         # Food and fashion images
│   ├── videos/        # Background videos
│   └── style.css       # Global styles
├── views/
│   ├── index.html      # Home page
│   ├── food.html       # Food gallery
│   ├── fashion.html    # Fashion gallery
│   ├── game.html       # Game page
│   ├── photobooth.html # Photobooth feature
│   └── upload.html     # Upload page
├── server.js           # Express server configuration
├── vercel.json        # Vercel deployment configuration
└── package.json       # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Harshitt23/fitnfoods.git
cd fitsnfoods
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:5000
```

## 🌐 Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with video background |
| `/food` | Food gallery with masonry layout |
| `/fashion` | Fashion gallery with outfits |
| `/game` | Interactive "Cute Runner" game |
| `/photobooth` | Photo grid creator with filters |
| `/upload` | Upload your own posts |

## 🎨 Features Overview

### Food Gallery (`/food`)
- Masonry/Pinterest-style grid layout
- Responsive design for all devices
- Beautiful food images with descriptions
- Smooth animations on page load

### Fashion Gallery (`/fashion`)
- Fashion outfit inspirations
- Categories: Date night, college looks, party wear, casual, etc.
- Hover effects on cards
- Responsive grid layout

### Interactive Game (`/game`)
- Cute runner game with cupcake obstacles
- Jump mechanics with double jump
- Score and timer tracking
- Confetti animations on game over
- Reset functionality

### Photobooth (`/photobooth`)
- Upload your photos
- Create grid layouts (2x2, 3x3, 4x4, 5x5, 8x8)
- Add filters: grayscale, sepia, invert
- Add stickers: hearts, stars, smile, sparkle
- Add decorative frames
- Download your creations in PNG or JPEG

### Upload Feature (`/upload`)
- Upload images or videos
- Categorize as Fashion or Food
- Add titles to your posts
- Integrated with Multer for file handling

## 📦 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments on push.

### Environment Variables

No environment variables required for basic deployment.

## 🎨 Customization

### Adding New Images
1. Add your images to `public/images/`
2. Update the HTML files in `views/` to reference new images
3. Use absolute paths: `/images/your-image.jpg`

### Changing the Video Background
1. Add your video to `public/videos/`
2. Update the `<source>` tag in `views/index.html` and `views/photobooth.html`
3. Recommended format: MP4

### Styling
- Main styles: `public/style.css`
- Page-specific styles: Inline `<style>` tags in HTML files
- Uses Tailwind CSS for responsive design

## 🛠️ Development

### Server Configuration
- Static files served from `public/` directory
- Express middleware configured for multipart uploads
- Handles both local development and Vercel deployment

### File Upload
- Uploads stored temporarily in `/tmp` (Vercel-compatible)
- File size limits configured in Multer
- Supports image and video formats

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

## 👤 Author

**Rishika2324**
- GitHub: [@Rishika2324](https://github.com/Harshitt23)

## 🙏 Acknowledgments

- Tailwind CSS for beautiful styling
- Animate.css for smooth animations
- Express.js community for excellent documentation
- Vercel for seamless deployment

---

Made with 💖 for fashion and food enthusiasts

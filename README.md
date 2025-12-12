# 🎨 Modern Portfolio Website

A stunning, fully-responsive portfolio website built with pure HTML, CSS, and JavaScript. Features smooth animations, interactive elements, and a clean, modern design inspired by contemporary web aesthetics.

## ✨ Features

### 🏠 Main Portfolio Page (index.html)
- **Two-Column Layout**: Professional side-by-side design with profile card on left, portfolio grid on right
- **Profile Card**: Beautiful gradient background with profile image and rotating badge
- **Vertical Navigation**: Sleek sidebar with vertical text navigation
- **Portfolio Title**: Large, bold "Portfolio" heading above stats grid
- **Interactive Stats Grid**: 2x2 grid layout with properly structured cards
  - **Projects Card**: Spans 2 rows, features an animated coder video that plays on hover/click
  - **Languages Card**: Displays coding languages count with icon
  - **Clients Card**: Showcases client information with simple icon
  - **Experience Card**: Highlights work experience with animated spiral graphic

### 📄 Additional Pages
1. **About Me** (`aboutme.html`) - Personal introduction and bio
2. **Clients** (`clients.html`) - Showcase of client work and partnerships
3. **Research** (`research.html`) - Research projects and publications
4. **Portfolio** (`index.html`) - Main landing page
5. **Podcast** (`podcast.html`) - Podcast episodes and content
6. **Languages** (`languages.html`) - Programming languages and skill levels
7. **Experience** (`experience.html`) - Detailed work history and achievements

## 🎥 Special Features

### Animated Coder Video
- Located in the Projects card on the main page
- **Hover to Play**: Video starts playing when you hover over it
- **Click to Toggle**: Click to play/pause the video
- Smooth fade-in transition when playing

### Interactive Elements
- Hover effects on all cards
- Smooth transitions and animations
- Parallax effect on profile card
- Rotating badge animation
- Responsive navigation sidebar

## 🚀 How to Use

### Local Development
1. Open the project folder
2. Start a local server:
   ```bash
   cd "/app/web devloper"
   python3 -m http.server 8080
   ```
3. Open your browser and navigate to: `http://localhost:8080/index.html`

### Customization Guide

#### Change Profile Information
Edit `index.html`:
```html
<!-- Update name -->
<h1 class="name">Your Name</h1>

<!-- Update email -->
<p class="email">your.email@domain.com</p>

<!-- Update profile image -->
<img src="YOUR_IMAGE_URL" alt="Profile Picture" class="profile-image">
```

#### Change Stats Numbers
Edit the stat numbers in `index.html`:
```html
<h3 class="stat-number">251</h3> <!-- Change this number -->
<p class="stat-label">Projects</p>
```

#### Change Video
Replace the video URL in `index.html`:
```html
<source src="YOUR_VIDEO_URL.mp4" type="video/mp4">
```

#### Customize Colors
Edit `style.css` to change the color scheme:
```css
/* Profile card gradient */
.profile-card {
    background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}

/* Card footer colors */
.card-footer.mint {
    background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

## 🎨 Color Scheme

The portfolio uses a vibrant, modern color palette:
- **Purple Gradient**: `#7c86d7` to `#d8a8db` (Profile card)
- **Mint Green**: `#a8e6cf` to `#7dd3ae` (Projects card)
- **Purple**: `#9b7fd4` to `#7c6bb5` (Languages card)
- **Dark Gray**: `#4a4a4a` (Clients card)
- **Orange**: `#ffb347` to `#ff9f47` (Experience card)

## 📱 Responsive Design

The website is fully responsive and works on:
- 🖥️ Desktop (1920px and above)
- 💻 Laptop (1400px - 1920px)
- 📱 Tablet (768px - 1400px)
- 📱 Mobile (below 768px)

## 🗂️ File Structure

```
web devloper/
├── index.html          # Main portfolio page
├── aboutme.html        # About Me page
├── clients.html        # Clients showcase
├── research.html       # Research projects
├── podcast.html        # Podcast episodes
├── languages.html      # Programming languages
├── experience.html     # Work experience
├── style.css          # Main stylesheet
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid
- **JavaScript**: Interactive elements and video controls
- **No frameworks**: Pure vanilla code for maximum performance

## 🎯 Key Design Principles

1. **Modern Aesthetic**: Clean lines, bold typography, vibrant colors
2. **Interactive Elements**: Hover effects, smooth transitions
3. **User Experience**: Intuitive navigation, clear hierarchy
4. **Performance**: Lightweight, fast-loading
5. **Accessibility**: Semantic HTML, proper contrast ratios

## 📝 Customization Tips

### Adding New Pages
1. Create a new HTML file (e.g., `newpage.html`)
2. Copy the structure from an existing page
3. Update the navigation in all files:
   ```html
   <a href="newpage.html" class="nav-item">New Page</a>
   ```

### Adding New Stat Cards
Add a new card in the `stats-grid` div:
```html
<div class="stat-card new-card">
    <div class="card-content centered">
        <!-- Your content here -->
    </div>
    <div class="card-footer your-color">
        <h3 class="stat-number">123</h3>
        <p class="stat-label">Label</p>
    </div>
</div>
```

### Changing Fonts
Add Google Fonts in the `<head>` section:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Update CSS:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

## 🐛 Troubleshooting

### Video Not Playing
- Check if the video URL is accessible
- Ensure the video format is supported (MP4 is recommended)
- Check browser console for errors

### Navigation Not Working
- Ensure all HTML files are in the same directory
- Check that file names match the href attributes
- Verify the server is running

### Styling Issues
- Clear browser cache
- Check for CSS syntax errors
- Verify that style.css is linked correctly

## 🌟 Best Practices

1. **Optimize Images**: Compress images before using
2. **Use CDN Videos**: Host videos on a CDN for better performance
3. **Test Cross-Browser**: Check compatibility on different browsers
4. **Mobile First**: Always test on mobile devices
5. **Accessibility**: Add alt text to images and proper ARIA labels

## 📄 License

Feel free to use this portfolio template for your personal or commercial projects!

## 🙏 Credits

- Design inspired by modern portfolio trends
- Icons: Unicode emojis
- Images: Unsplash (replace with your own)
- Video: Pixabay (replace with your own)

---

**Made with ❤️ using pure HTML, CSS, and JavaScript**

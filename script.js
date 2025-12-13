// Animated Coder Video Functionality
const coderVideo = document.getElementById('coderVideo');
const playOverlay = document.getElementById('playOverlay');
const videoContainer = document.querySelector('.video-container');

let isPlaying = false;

if (videoContainer && coderVideo && playOverlay) {
    // Play video on hover
    videoContainer.addEventListener('mouseenter', () => {
        if (!isPlaying) {
            coderVideo.play();
            coderVideo.classList.add('playing');
            playOverlay.classList.add('hidden');
        }
    });

    // Pause video when mouse leaves (optional - remove if you want it to keep playing)
    videoContainer.addEventListener('mouseleave', () => {
        if (!isPlaying) {
            coderVideo.pause();
            coderVideo.classList.remove('playing');
            playOverlay.classList.remove('hidden');
        }
    });

    // Toggle play/pause on click
    videoContainer.addEventListener('click', () => {
        if (coderVideo.paused) {
            coderVideo.play();
            coderVideo.classList.add('playing');
            playOverlay.classList.add('hidden');
            isPlaying = true;
        } else {
            coderVideo.pause();
            coderVideo.classList.remove('playing');
            playOverlay.classList.remove('hidden');
            isPlaying = false;
        }
    });
}

// Smooth scroll for navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        // Add active class to clicked item
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

// Add hover effects to stat cards
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for profile card
window.addEventListener('mousemove', (e) => {
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        profileCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});

// Reset profile card rotation when mouse leaves
document.addEventListener('mouseleave', () => {
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
    }
});

// Dark Mode Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
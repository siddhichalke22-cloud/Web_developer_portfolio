const coderVideo = document.getElementById('coderVideo');
const playOverlay = document.getElementById('playOverlay');
const videoContainer = document.querySelector('.video-container');

let isPlaying = false;

if (videoContainer && coderVideo && playOverlay) {
    videoContainer.addEventListener('mouseenter', () => {
        if (!isPlaying) {
            coderVideo.play();
            coderVideo.classList.add('playing');
            playOverlay.classList.add('hidden');
        }
    });

    videoContainer.addEventListener('mouseleave', () => {
        if (!isPlaying) {
            coderVideo.pause();
            coderVideo.classList.remove('playing');
            playOverlay.classList.remove('hidden');
        }
    });

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

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

window.addEventListener('mousemove', (e) => {
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        profileCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});

document.addEventListener('mouseleave', () => {
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
    }
});

const themeToggle = document.getElementById('themeToggle');
const body = document.body;


const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
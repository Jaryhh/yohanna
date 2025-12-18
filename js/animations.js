// ============================================
// HIDDEN PHRASES REVEAL
// ============================================

/**
 * Initialize hidden phrases reveal functionality
 */
function initHiddenPhrases() {
    const phrases = document.querySelectorAll('.hidden-phrase');
    
    phrases.forEach(phrase => {
        // Evento para desktop
        phrase.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('revealed');
        });
        
        // Evento para móviles
        phrase.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.classList.toggle('revealed');
        });
        
        // Prevenir el comportamiento por defecto del hover en móviles
        phrase.addEventListener('touchstart', function(e) {
            e.preventDefault();
        });
    });
}

// ============================================
// FLOATING HEARTS ANIMATION
// ============================================

/**
 * Creates a floating heart element with random properties
 */
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💕';
    
    // Random horizontal position
    heart.style.left = Math.random() * 100 + '%';
    
    // Random animation duration between 5-8 seconds
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    
    // Random animation delay up to 5 seconds
    heart.style.animationDelay = Math.random() * 5 + 's';
    
    // Add to container
    document.getElementById('heartContainer').appendChild(heart);
    
    // Remove after animation completes
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

/**
 * Initialize floating hearts
 */
function initFloatingHearts() {
    // Generate hearts continuously
    setInterval(createHeart, 400);
    
    // Create initial batch of hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 200);
    }
}

// ============================================
// SPARKLE EFFECT ON CLICK
// ============================================

/**
 * Creates sparkle effect at click position
 * @param {Event} e - Click event
 */
function createSparkle(e) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.innerHTML = '✨';
    
    // Position at click location
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    
    // Random size
    sparkle.style.fontSize = (Math.random() * 20 + 20) + 'px';
    
    // Add to body
    document.body.appendChild(sparkle);
    
    // Remove after animation
    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}

/**
 * Initialize sparkle effect
 */
function initSparkleEffect() {
    document.addEventListener('click', createSparkle);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

/**
 * Initialize intersection observer for scroll animations
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all cards
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

/**
 * Enable smooth scrolling
 */
function initSmoothScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// ============================================
// AUDIO PLAYERS (compact multi-player)
// ============================================

/**
 * Initialize compact audio players: play/pause, progress, seek, and pause others when one plays
 */
function initAudioPlayer() {
    const players = document.querySelectorAll('.compact-player');

    if (!players || players.length === 0) return;

    // Helper to pause all audios except the provided one
    function pauseOthers(exceptAudio) {
        document.querySelectorAll('.cp-audio').forEach(a => {
            if (a !== exceptAudio) {
                a.pause();
            }
        });
    }

    players.forEach(player => {
        const btn = player.querySelector('.cp-play');
        const audio = player.querySelector('.cp-audio');
        const progressFilled = player.querySelector('.cp-progress-filled');
        const progressBar = player.querySelector('.cp-progress');

        if (!btn || !audio || !progressFilled) return;

        // Update UI when play/pause
        function updateBtn() {
            btn.textContent = audio.paused ? '▶️' : '⏸️';
        }

        // Toggle play/pause
        function togglePlay(e) {
            if (e) e.preventDefault();
            if (audio.paused) {
                pauseOthers(audio);
                audio.play().catch(() => {});
            } else {
                audio.pause();
            }
        }

        btn.addEventListener('click', togglePlay);
        btn.addEventListener('touchend', function(e){ e.preventDefault(); togglePlay(); });

        // Update progress bar as audio plays
        audio.addEventListener('timeupdate', () => {
            if (audio.duration) {
                const pct = (audio.currentTime / audio.duration) * 100;
                progressFilled.style.width = pct + '%';
            }
        });

        // When audio starts, pause others and update buttons
        audio.addEventListener('play', () => {
            pauseOthers(audio);
            document.querySelectorAll('.cp-play').forEach(b => b.textContent = '▶️');
            updateBtn();
        });

        audio.addEventListener('pause', updateBtn);

        // Seek when clicking/tapping progress bar
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            if (audio.duration) audio.currentTime = x * audio.duration;
        });

        // Touch support for seek
        progressBar.addEventListener('touchend', (e) => {
            const touch = e.changedTouches[0];
            const rect = progressBar.getBoundingClientRect();
            const x = (touch.clientX - rect.left) / rect.width;
            if (audio.duration) audio.currentTime = x * audio.duration;
        });

        // Reset progress when track ends
        audio.addEventListener('ended', () => {
            progressFilled.style.width = '0%';
            btn.textContent = '▶️';
        });
    });
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all features when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initFloatingHearts();
    initSparkleEffect();
    initScrollAnimations();
    initSmoothScroll();
    initHiddenPhrases();
    initAudioPlayer();
    initRelationshipCounter();
    
    console.log('🎉 Carta de cumpleaños cargada exitosamente!');
});

// ============================================
// RELATIONSHIP COUNTER
// ============================================

/**
 * Initialize relationship counter since 4 Nov 2025 12:58 (local time)
 */
function initRelationshipCounter() {
    const el = document.getElementById('relationshipTime');
    const startEl = document.querySelector('.relationship-start');
    if (!el) return;

    // Start date (months are 0-indexed: 10 = November)
    const startDate = new Date(2025, 10, 4, 12, 58, 0);

    function pad(n) { return n.toString().padStart(2, '0'); }

    function update() {
        const now = new Date();
        let diff = now - startDate;
        if (diff < 0) diff = 0;

        const totalSeconds = Math.floor(diff / 1000);
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const totalHours = Math.floor(totalMinutes / 60);
        const hours = totalHours % 24;
        const days = Math.floor(totalHours / 24);

        // Years (approximate by 365 days)
        const years = Math.floor(days / 365);
        const remDays = days % 365;

        let text = '';
        if (years > 0) {
            text = `${years} año${years>1?'s':''} ${remDays}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        } else {
            text = `${days} día${days!==1?'s':''} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        }

        el.textContent = text;

        if (startEl) {
            startEl.textContent = `Desde: ${startDate.toLocaleString()}`;
        }
    }

    update();
    setInterval(update, 1000);
}

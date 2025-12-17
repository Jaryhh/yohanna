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
    
    console.log('🎉 Carta de cumpleaños cargada exitosamente!');
});

// ===== LOGIN CHECK - MUST BE FIRST =====
(function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    // Check if we're on index.html
    const currentPath = window.location.pathname;
    const isIndexPage = currentPath.includes('index.html') || currentPath === '/' || currentPath.endsWith('/');
    
    // If on index and not logged in, redirect immediately
    if (isIndexPage && (!isLoggedIn || isLoggedIn !== 'true')) {
        console.log('Not logged in, redirecting to login...');
        window.location.replace('login.html'); // Use replace instead of href
        throw new Error('Redirecting to login'); // Stop all other code
    }
})();

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
    localStorage.removeItem('username');
    window.location.replace('login.html');
}



// ===== HERO SLIDER =====
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const sliderWrapper = document.querySelector('.slider-wrapper');
let autoSlideInterval;

function updateHeroSlider() {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateHeroSlider();
    resetAutoSlide();
}

function nextHeroSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateHeroSlider();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextHeroSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}







// Start automatic sliding
startAutoSlide();




// Pause on hover
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    startAutoSlide();
});











// ===== READ MORE TOGGLE =====
function toggleReadMore() {
    const moreText = document.getElementById('more-text');
    const dots = document.getElementById('dots');
    const btn = document.getElementById('read-more-btn');

    if (moreText.classList.contains('show')) {
        moreText.classList.remove('show');
        dots.style.display = 'inline';
        btn.textContent = 'Read More';
    } else {
        moreText.classList.add('show');
        dots.style.display = 'none';
        btn.textContent = 'Read Less';
    }
}










// ===== SIGNS CARDS =====
const signsData = [
    {
        id: 1,
        title: "CONSTANT STRESS",
        image: "asserts/balance 1.png",
        link: "#stress"
    },
    {
        id: 2,
        title: "SLEEP PROBLEMS",
        image: "asserts/sleep 1.png",
        link: "#sleep"
    },
    {
        id: 3,
        title: "LOSS OF MOTIVATION",
        image: "asserts/mmll 1.png",
        link: "#motivation"
    },
    {
        id: 4,
        title: "FEELING ALONE",
        image: "asserts/mmll 1.png",
        link: "#alone"
    }
];

function createCards() {
    const container = document.getElementById('cards-container');
    
    signsData.forEach(sign => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${sign.image}" alt="${sign.title}">
            </div>
            <h3 class="card-title">${sign.title}</h3>
            <a href="${sign.link}" class="card-button">Learn More</a>
        `;
        
        container.appendChild(card);
    });
}











// ===== TESTIMONIALS SLIDER =====
const testimonials = [
    "I spent six months believing I was the least qualified person in the room. The moment I started asking questions instead of hiding, everything changed.",
    "I realized that 'failing' wasn't stopping the process, but simply documenting another way that didn't work. It made every setback a lesson, not a defeat.",
    "I tried to be a martyr for productivity. I burned out in three months. Now I schedule my rest as strictly as my meetings.",
    "Everyone talks about the 'aha' moment. No one tells you about the fifty moments of absolute frustration you have to push through to get there."
];

let currentTestimonialIndex = 0;
const testimonialCard = document.getElementById('slider-card');
const testimonialText = document.getElementById('slider-text');
const testimonialDotsContainer = document.getElementById('slider-dots');

function createTestimonialDots() {
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('testimonials-section-dots__item');
        if (index === 0) dot.classList.add('testimonials-section-dots__item--active');
        dot.onclick = () => goToTestimonialSlide(index);
        testimonialDotsContainer.appendChild(dot);
    });
}

function updateTestimonialSlide() {
    testimonialCard.style.opacity = '0';
    testimonialCard.style.transform = 'translateX(20px)';

    setTimeout(() => {
        testimonialText.textContent = testimonials[currentTestimonialIndex];
        
        const dots = document.querySelectorAll('.testimonials-section-dots__item');
        dots.forEach((dot, i) => {
            dot.classList.toggle('testimonials-section-dots__item--active', i === currentTestimonialIndex);
        });

        testimonialCard.style.opacity = '1';
        testimonialCard.style.transform = 'translateX(0)';
    }, 400);
}

function goToTestimonialSlide(index) {
    currentTestimonialIndex = index;
    updateTestimonialSlide();
    resetTestimonialTimer();
}

function nextTestimonialSlide() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonialSlide();
}

let testimonialSlideTimer = setInterval(nextTestimonialSlide, 5000);

function resetTestimonialTimer() {
    clearInterval(testimonialSlideTimer);
    testimonialSlideTimer = setInterval(nextTestimonialSlide, 5000);
}











// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    createCards();
    createTestimonialDots();
    testimonialText.textContent = testimonials[0];
});












// Gallery data array
const galleryData = [
    {
        id: 1,
        title: "SUBSTANCE USE DISORDERS",
        image: "asserts/image 13.png",
        alt: "Substance Use Disorders Illustration"
    },
    {
        id: 2,
        title: "NEURODEVELOPMENTAL DISORDERS",
        image: "asserts/image 6.png",
        alt: "Neurodevelopmental Disorders Illustration"
    },
    {
        id: 3,
        title: "PERSONALITY DISORDER",
        image: "asserts/image 11.png",
        alt: "Personality Disorder Illustration"
    },
    {
        id: 4,
        title: "PSYCHOTIC DISORDERS",
        image: "asserts/image 9.png",
        alt: "Psychotic Disorders Illustration"
    },
    {
        id: 5,
        title: "TRAUMA-RELATED DISORDERS",
        image: "asserts/image 8.png",
        alt: "Trauma-Related Disorders Illustration"
    },
    {
        id: 6,
        title: "EATING DISORDER",
        image: "asserts/image 10.png",
        alt: "Eating Disorder Illustration"
    },
    {
        id: 7,
        title: "MOOD DISORDERS",
        image: "asserts/image 7.png",
        alt: "Mood Disorders Illustration"
    },
    {
        id: 8,
        title: "ANXIETY DISORDER",
        image: "asserts/image 5.png",
        alt: "Anxiety Disorder Illustration"
    },
    {
        id: 9,
        title: "DISSOCIATIVE DISORDERS",
        image: "asserts/image 14.png",
        alt: "Dissociative Disorders Illustration"
    },
    {
        id: 10,
        title: "Sleep Disorders",
        image: "asserts/image 15.png",
        alt: "Sleep Disorders Illustration"
    },
    {
        id: 12,
        title: "Somatic Symptom Disorders",
        image: "asserts/image 16.png",
        alt: "Anxiety Disorder Illustration"
    },
    {
        id: 13,
        title: "Impulse-Control DISORDERS",
        image: "asserts/image 18.png",
        alt: "Dissociative Disorders Illustration"
    }
];

// Load gallery from array
function loadGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = '';

    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.onclick = () => openLightbox(item.id);

        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.alt}" class="gallery-item-image">
            <div class="gallery-item-content">
                <h3 class="gallery-item-title">${item.title}</h3>
                <button class="gallery-item-button">Learn More</button>
            </div>
        `;

        galleryGrid.appendChild(galleryItem);
    });
}

// Open lightbox with zoom effect
function openLightbox(itemId) {
    const item = galleryData.find(i => i.id === itemId);
    if (!item) return;

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');

    lightboxImage.src = item.image;
    lightboxImage.alt = item.alt;
    lightboxTitle.textContent = item.title;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox(event) {
    // Close only if clicking outside the image or on the close button
    if (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Initialize gallery on page load
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
});
// Language Switcher
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update Read More button text based on current state
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreText = document.getElementById('more-text');
    if (readMoreBtn && moreText) {
        if (moreText.classList.contains('show')) {
            readMoreBtn.textContent = translations[lang]['read_less'];
        } else {
            readMoreBtn.textContent = translations[lang]['read_more'];
        }
    }
    
    // Update dynamically generated cards
    updateSignsCards(lang);
    
    // Update gallery items
    updateGalleryItems(lang);
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

function updateSignsCards(lang) {
    const signsData = [
        {
            id: 1,
            titleKey: "sign_stress",
            image: "asserts/balance 1.png",
            link: "#stress"
        },
        {
            id: 2,
            titleKey: "sign_sleep",
            image: "asserts/sleep 1.png",
            link: "#sleep"
        },
        {
            id: 3,
            titleKey: "sign_motivation",
            image: "asserts/mmll 1.png",
            link: "#motivation"
        },
        {
            id: 4,
            titleKey: "sign_alone",
            image: "asserts/mmll 1.png",
            link: "#alone"
        }
    ];
    
    const container = document.getElementById('cards-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    signsData.forEach(sign => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const title = translations[lang][sign.titleKey] || sign.titleKey;
        const learnMore = translations[lang]['learn_more'] || 'Learn More';
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${sign.image}" alt="${title}">
            </div>
            <h3 class="card-title">${title}</h3>
            <a href="${sign.link}" class="card-button">${learnMore}</a>
        `;
        
        container.appendChild(card);
    });
}

function updateGalleryItems(lang) {
    const galleryData = [
        { id: 1, titleKey: "gallery_substance", image: "asserts/image 13.png" },
        { id: 2, titleKey: "gallery_neuro", image: "asserts/image 6.png" },
        { id: 3, titleKey: "gallery_personality", image: "asserts/image 11.png" },
        { id: 4, titleKey: "gallery_psychotic", image: "asserts/image 9.png" },
        { id: 5, titleKey: "gallery_trauma", image: "asserts/image 8.png" },
        { id: 6, titleKey: "gallery_eating", image: "asserts/image 10.png" },
        { id: 7, titleKey: "gallery_mood", image: "asserts/image 7.png" },
        { id: 8, titleKey: "gallery_anxiety", image: "asserts/image 5.png" },
        { id: 9, titleKey: "gallery_dissociative", image: "asserts/image 14.png" },
        { id: 10, titleKey: "gallery_sleep", image: "asserts/image 15.png" },
        { id: 11, titleKey: "gallery_somatic", image: "asserts/image 16.png" },
        { id: 12, titleKey: "gallery_impulse", image: "asserts/image 18.png" }
    ];
    
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    galleryData.forEach(item => {
        const title = translations[lang][item.titleKey] || item.titleKey;
        const learnMore = translations[lang]['learn_more'] || 'Learn More';
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.onclick = () => openLightbox(item.id, title);
        
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${title}" class="gallery-item-image">
            <div class="gallery-item-content">
                <h3 class="gallery-item-title">${title}</h3>
                <button class="gallery-item-button">${learnMore}</button>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Update openLightbox to accept title parameter
function openLightbox(itemId, title) {
    const galleryData = [
        { id: 1, titleKey: "gallery_substance", image: "asserts/image 13.png" },
        { id: 2, titleKey: "gallery_neuro", image: "asserts/image 6.png" },
        { id: 3, titleKey: "gallery_personality", image: "asserts/image 11.png" },
        { id: 4, titleKey: "gallery_psychotic", image: "asserts/image 9.png" },
        { id: 5, titleKey: "gallery_trauma", image: "asserts/image 8.png" },
        { id: 6, titleKey: "gallery_eating", image: "asserts/image 10.png" },
        { id: 7, titleKey: "gallery_mood", image: "asserts/image 7.png" },
        { id: 8, titleKey: "gallery_anxiety", image: "asserts/image 5.png" },
        { id: 9, titleKey: "gallery_dissociative", image: "asserts/image 14.png" },
        { id: 10, titleKey: "gallery_sleep", image: "asserts/image 15.png" },
        { id: 11, titleKey: "gallery_somatic", image: "asserts/image 16.png" },
        { id: 12, titleKey: "gallery_impulse", image: "asserts/image 18.png" }
    ];
    
    const item = galleryData.find(i => i.id === itemId);
    if (!item) return;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    
    lightboxImage.src = item.image;
    lightboxImage.alt = title || translations[currentLang][item.titleKey];
    lightboxTitle.textContent = title || translations[currentLang][item.titleKey];
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Language toggle button
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.nav-icons .icon-btn:last-child');
    
    if (langBtn) {
        // Load saved language preference
        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        if (savedLang === 'ar') {
            setLanguage('ar');
            langBtn.textContent = 'AR';
        }
        
        langBtn.addEventListener('click', () => {
            if (currentLang === 'en') {
                setLanguage('ar');
                langBtn.textContent = 'AR';
            } else {
                setLanguage('en');
                langBtn.textContent = 'EN';
            }
        });
    }
    
    // Initialize cards and gallery with current language
    updateSignsCards(currentLang);
    updateGalleryItems(currentLang);
});

// Update toggleReadMore to use translations
function toggleReadMore() {
    const moreText = document.getElementById('more-text');
    const dots = document.getElementById('dots');
    const btn = document.getElementById('read-more-btn');

    if (moreText.classList.contains('show')) {
        moreText.classList.remove('show');
        dots.style.display = 'inline';
        btn.textContent = translations[currentLang]['read_more'];
    } else {
        moreText.classList.add('show');
        dots.style.display = 'none';
        btn.textContent = translations[currentLang]['read_less'];
    }
}
// Language Switcher
let currentLanguage = localStorage.getItem('language') || 'en';

// Apply saved language on load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    updateLanguageButton();
});

// Language toggle button
const languageBtn = document.querySelector('.nav-icons button:nth-child(2)');
if (languageBtn) {
    languageBtn.addEventListener('click', toggleLanguage);
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(currentLanguage);
    localStorage.setItem('language', currentLanguage);
    updateLanguageButton();
}

function setLanguage(lang) {
    // Set HTML direction and lang attribute
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update dynamic content (cards, testimonials, gallery)
    updateDynamicContent(lang);
}

function updateLanguageButton() {
    const languageBtn = document.querySelector('.nav-icons button:nth-child(2)');
    if (languageBtn) {
        languageBtn.textContent = currentLanguage === 'en' ? 'AR' : 'EN';
    }
}

function updateDynamicContent(lang) {
    // Update signs cards if they exist
    if (typeof signsData !== 'undefined') {
        updateSignsCards(lang);
    }
    
    // Update gallery if it exists
    if (typeof galleryData !== 'undefined') {
        updateGalleryItems(lang);
    }
}

function updateSignsCards(lang) {
    const cards = document.querySelectorAll('.card-title');
    const buttons = document.querySelectorAll('.card-button');
    
    const signKeys = ['sign_stress', 'sign_sleep', 'sign_motivation', 'sign_alone'];
    cards.forEach((card, index) => {
        if (signKeys[index] && translations[lang][signKeys[index]]) {
            card.textContent = translations[lang][signKeys[index]];
        }
    });
    
    buttons.forEach(button => {
        button.textContent = translations[lang].learn_more;
    });
}

function updateGalleryItems(lang) {
    const galleryTitles = document.querySelectorAll('.gallery-item-title');
    const galleryButtons = document.querySelectorAll('.gallery-item-button');
    
    galleryButtons.forEach(button => {
        button.textContent = translations[lang].learn_more;
    });
}
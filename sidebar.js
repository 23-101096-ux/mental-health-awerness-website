// ========================================
// SCROLL PROGRESS INDICATOR (SCROLLSPY)
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const progressItems = document.querySelectorAll('.scroll-progress-item');
    const sections = document.querySelectorAll('section[id], .slider-container[id]');
    
    // Update active indicator based on scroll position
    function updateActiveSection() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 200; // Offset for better detection
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });
        
        // Update progress items
        progressItems.forEach(item => {
            const itemSection = item.getAttribute('data-section');
            
            if (itemSection === currentSection) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    // Smooth scroll to section when clicking progress item
    progressItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Listen to scroll events
    window.addEventListener('scroll', updateActiveSection);
    
    // Initial check
    updateActiveSection();
});
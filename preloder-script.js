   // Preloader Logic
   window.addEventListener('load', function() {
    // Simulate loading time (remove this in production)
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        const mainContent = document.getElementById('mainContent');
        
        // Fade out preloader
        preloader.classList.add('fade-out');
        
        // Show main content after preloader fades
        setTimeout(function() {
            mainContent.classList.add('show');
        }, 500);
    }, 3000); // 3 seconds demo - adjust or remove for production
});

// Alternative: Hide preloader as soon as page loads
// Uncomment this for production and remove the setTimeout above
/*
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('mainContent');
    
    preloader.classList.add('fade-out');
    setTimeout(function() {
        mainContent.classList.add('show');
    }, 500);
});
*/



// Check if user is logged in
// Check if user is logged in
window.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    // If not logged in, redirect to login page
    if (!isLoggedIn || isLoggedIn !== 'true') {
        window.location.href = 'login.html';
        return;
    }
    
    // If logged in, show preloader then redirect to main page
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 3000); // 3 seconds
});
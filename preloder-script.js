// Check if user is logged in when preloader loads
window.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    // If not logged in, redirect back to login page
    if (!isLoggedIn || isLoggedIn !== 'true') {
        window.location.href = 'login.html';
        return;
    }
    
    // If logged in, show preloader animation then redirect to main page
    const preloader = document.getElementById('preloader');
    
    // Wait 3 seconds then redirect to index
    setTimeout(function() {
        if (preloader) {
            preloader.classList.add('fade-out');
        }
        
        // Redirect to index after fade animation
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 500);
    }, 3000); // 3 seconds for preloader animation
});
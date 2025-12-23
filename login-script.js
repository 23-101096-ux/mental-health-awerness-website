// let selectedUser = null;

// const users = {
//     male: { username: 'john_doe', password: 'male123' },
//     female: { username: 'jane_doe', password: 'female123' }
// };

// function selectUser(userType) {
//     selectedUser = userType;
    
//     document.getElementById('male-card').classList.remove('selected');
//     document.getElementById('female-card').classList.remove('selected');
//     document.getElementById(`${userType}-card`).classList.add('selected');
    
//     document.getElementById('error-message').style.display = 'none';
//     document.getElementById('success-message').style.display = 'none';

//     if (userType === 'male') {
//         document.getElementById('username').value = 'john_doe';
//         document.getElementById('password').value = 'male123';
//     } else {
//         document.getElementById('username').value = 'jane_doe';
//         document.getElementById('password').value = 'female123';
//     }
// }

// function handleLogin() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const errorMsg = document.getElementById('error-message');
//     const successMsg = document.getElementById('success-message');

//     errorMsg.style.display = 'none';
//     successMsg.style.display = 'none';

//     if (!selectedUser) {
//         errorMsg.textContent = 'Please select a user type (Male or Female)';
//         errorMsg.style.display = 'block';
//         return;
//     }

//     if (!username || !password) {
//         errorMsg.textContent = 'Please enter both username and password';
//         errorMsg.style.display = 'block';
//         return;
//     }

//     const user = users[selectedUser];
//     if (username === user.username && password === user.password) {
//         successMsg.textContent = `Welcome ${selectedUser === 'male' ? 'John' : 'Jane'}! Redirecting...`;
//         successMsg.style.display = 'block';
        
//         // Save login state
//         localStorage.setItem('isLoggedIn', 'true');
//         localStorage.setItem('userType', selectedUser);
//         localStorage.setItem('username', username);
        
//         // Redirect to preloader
//         setTimeout(() => {
//             window.location.href = 'preloader.html';
//         }, 1000);
//     } else {
//         errorMsg.textContent = 'Invalid username or password';
//         errorMsg.style.display = 'block';
//     }
// }

// // Enter key to login
// document.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         handleLogin();
//     }
// });

// // Check if already logged in - redirect directly to index
// window.addEventListener('DOMContentLoaded', function() {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     if (isLoggedIn === 'true') {
//         // Already logged in, skip login and preloader, go directly to index
//         window.location.href = 'index.html';
//     }
// });


// 1. FORCE LOGOUT: Clear data immediately when this script loads
localStorage.removeItem('isLoggedIn');
localStorage.removeItem('userType');
localStorage.removeItem('username');

let selectedUser = null;

const users = {
    male: { username: 'yasser-abo', password: 'male123' },
    female: { username: 'nada-abo', password: 'female123' }
};

function selectUser(userType) {
    selectedUser = userType;
    
    // Visual selection updates
    document.getElementById('male-card').classList.remove('selected');
    document.getElementById('female-card').classList.remove('selected');
    document.getElementById(`${userType}-card`).classList.add('selected');
    
    // Hide messages
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('success-message').style.display = 'none';

    // Auto-fill credentials for demo purposes
    if (userType === 'male') {
        document.getElementById('username').value = 'yasser-abo';
        document.getElementById('password').value = 'male123';
    } else {
        document.getElementById('username').value = 'nada-abo';
        document.getElementById('password').value = 'female123';
    }
}

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-message');
    const successMsg = document.getElementById('success-message');

    errorMsg.style.display = 'none';
    successMsg.style.display = 'none';

    if (!selectedUser) {
        errorMsg.textContent = 'Please select a user type (Male or Female)';
        errorMsg.style.display = 'block';
        return;
    }

    if (!username || !password) {
        errorMsg.textContent = 'Please enter both username and password';
        errorMsg.style.display = 'block';
        return;
    }

    const user = users[selectedUser];
    if (username === user.username && password === user.password) {
        successMsg.textContent = `Welcome ${selectedUser === 'male' ? 'yasser' : 'nada'}! Redirecting...`;
        successMsg.style.display = 'block';
        
        // 2. SET LOGIN SUCCESS: Only set this AFTER clicking login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userType', selectedUser);
        localStorage.setItem('username', username);
        
        // 3. GO TO PRELOADER
        setTimeout(() => {
            window.location.href = 'preloader.html';
        }, 1000);
    } else {
        errorMsg.textContent = 'Invalid username or password';
        errorMsg.style.display = 'block';
    }
}

// Enter key support
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleLogin();
    }
});

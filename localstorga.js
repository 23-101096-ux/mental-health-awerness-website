// const contactForm = document.getElementById('contactForm');

// if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         validateForm();
//     });
// }

// function validateForm() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
    
//     if(name && email) {
//         saveFormData();
//     }
// }

// function saveFormData() {
//     const formData = {
//         name: document.getElementById('name').value,
//         surname: document.getElementById('surname').value,
//         number: document.getElementById('number').value,
//         email: document.getElementById('email').value,
//         message: document.getElementById('message').value,
//         timestamp: new Date().toISOString()
//     };

//     // Save to Local Storage
//     let list = JSON.parse(localStorage.getItem('contacts')) || [];
//     list.push(formData);
//     localStorage.setItem('contacts', JSON.stringify(list));

//     alert("Message Sent Successfully!");
//     contactForm.reset();
// }







document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the form from refreshing the page
            validateForm();
        });
    }
});

function validateForm() {
    // Get values from the input fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const number = document.getElementById('number').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation: Check if Name, Email, and Message are filled
    if(name && email && message) {
        saveFormData(name, surname, email, number, message);
    } else {
        alert("Please fill in at least Name, Email, and Message.");
    }
}

function saveFormData(name, surname, email, number, message) {
    // Create an object with the form data
    const formData = {
        name: name,
        surname: surname,
        number: number,
        email: email,
        message: message,
        timestamp: new Date().toLocaleString() // Adds a readable date and time
    };

    // 1. Get existing messages from Local Storage (or start an empty list)
    let messagesList = JSON.parse(localStorage.getItem('contactMessages')) || [];
    
    // 2. Add the new message to the list
    messagesList.push(formData);

    // 3. Save the updated list back to Local Storage
    localStorage.setItem('contactMessages', JSON.stringify(messagesList));

    // Success feedback
    console.log("Message saved:", formData); // Logs to Console
    alert("Message Sent Successfully! Check Local Storage.");
    
    // Clear the form
    document.getElementById('contactForm').reset();
}
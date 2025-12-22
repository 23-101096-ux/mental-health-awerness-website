const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validateForm();
    });
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if(name && email) {
        saveFormData();
    }
}

function saveFormData() {
    const formData = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        number: document.getElementById('number').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };

    // Save to Local Storage
    let list = JSON.parse(localStorage.getItem('contacts')) || [];
    list.push(formData);
    localStorage.setItem('contacts', JSON.stringify(list));

    alert("Message Sent Successfully!");
    contactForm.reset();
}
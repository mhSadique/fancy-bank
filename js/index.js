const email = document.getElementById('email-field');
const password = document.getElementById('password-field');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {
    if (email.value == 'abc@gmail.com' && password.value == '12345') {
        location.href = 'banking.html';
    } else {
        alert('Info incorrect.');
    }
})
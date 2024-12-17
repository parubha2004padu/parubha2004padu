// Get form elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

// Toggle Forms
showRegister.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

showLogin.addEventListener('click', () => {
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Form Submission (Placeholder)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login form submitted!');
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registration form submitted!');
});
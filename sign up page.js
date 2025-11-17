document.addEventListener('DOMContentLoaded', () => { const loginForm = document.getElementById('loginForm'); const signupForm = document.getElementById('signupForm'); const showSignup = document.getElementById('showSignup'); const showLogin = document.getElementById('showLogin'); const formTitle = document.getElementById('formTitle');

showSignup.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    formTitle.textContent = 'Sign Up';
});

showLogin.addEventListener('click', () => {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    formTitle.textContent = 'Login';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Logged in successfully!');
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Account created successfully!');
});

});
  const signupForm = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

function showMessage(message, success = false) {
  if (!errorMessage) return;
  errorMessage.textContent = message;
  errorMessage.classList.toggle('success', success);
}

if (signupForm) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstname-input')?.value.trim() || '';
    const email = document.getElementById('email-input')?.value.trim() || '';
    const password = document.getElementById('password-input')?.value || '';
    const confirmPassword = document.getElementById('confirm-password-input')?.value || '';

    if (!firstName || !email || !password || !confirmPassword) {
      showMessage('Please fill in all fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      showMessage('Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      showMessage('Passwords do not match.');
      return;
    }

    showMessage('Sign up successful! Redirecting to login...', true);
    signupForm.reset();

    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1600);
  });
}

const loginForm = document.getElementById('login-form');

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email-input')?.value.trim() || '';
    const password = document.getElementById('password-input')?.value || '';
    const loginMessage = document.getElementById('error-message');

    if (!email || !password) {
      if (loginMessage) {
        loginMessage.textContent = 'Please enter your email and password.';
        loginMessage.classList.remove('success');
      }
      return;
    }

    if (loginMessage) {
      loginMessage.textContent = 'Login successful!';
      loginMessage.classList.add('success');
    }

    window.location.href = 'index.html';
  });
}

const signupBtn = document.getElementById('signup-btn');
const errorMsg = document.getElementById('signup-msg');

signupBtn.addEventListener('click', () => {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (!isValidPassword(password)) {
    errorMsg.textContent = 'Password must be at least 8 characters long and contain at least one number.';
  } else if (password !== confirmPassword) {
    errorMsg.textContent = 'Passwords do not match.';
  } else {
    errorMsg.textContent = 'Sign up successful!';
    window.location.href = "main.html"; // navigate to success.html
  }
});

function isValidPassword(password) {

  const regex = /^(?=.*\d).{8,}$/;
  return regex.test(password);
}

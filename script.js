function submitForm(event) {
  event.preventDefault();

  const passwordInput = document.getElementById('passwordInput');
  const message = document.getElementById('message');

  // Add your password validation logic here
  const password = 'SAYABUKANROBOT'; // Replace with your actual password

  if (passwordInput.value === password) {
    // Password is correct
    message.textContent = 'Password correct. Redirecting...';
    message.style.color = 'green';
    message.style.display = 'block';

    setTimeout(() => {
      adjustViewportForPasswordPage(); // Call the function to adjust viewport
      window.location.href = 'homepage.html'; // Redirect to homepage.html
    }, 2000); // Delay for 2 seconds before redirecting
  } else {
    // Password is incorrect
    message.textContent = 'Password incorrect. Please try again.';
    message.style.color = 'red';
    message.style.display = 'block';
  }
}

function adjustViewportForPasswordPage() {
  const passwordForm = document.getElementById('passwordForm');
  const formHeight = passwordForm.offsetHeight;
  const formWidth = passwordForm.offsetWidth;

  // Set the viewport's width and height to match the form's size
  document.documentElement.style.width = `${formWidth}px`;
  document.documentElement.style.height = `${formHeight}px`;
}

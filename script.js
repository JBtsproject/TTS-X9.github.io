function submitForm(event) {
    event.preventDefault();
    
    const passwordInput = document.getElementById('passwordInput');
    const message = document.getElementById('message');
    
    // Add your password validation logic here
    const password = 'yourpassword'; // Replace with your actual password
    
    if (passwordInput.value === password) {
        // Password is correct
        message.textContent = 'Password correct. Redirecting...';
        message.style.color = 'green';
        message.style.display = 'block';
        
        // Delay for the transition effect
        setTimeout(function() {
            document.getElementById('passwordPage').style.display = 'none';
            document.getElementById('homePage').style.display = 'block';
        }, 1000); // Adjust the delay as needed
    } else {
        // Password is incorrect
        message.textContent = 'Password incorrect. Please try again.';
        message.style.color = 'red';
        message.style.display = 'block';
    }
}

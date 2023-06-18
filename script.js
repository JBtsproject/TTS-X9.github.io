function submitForm(event) {
    event.preventDefault();
    var password = document.getElementById('passwordInput').value;
    
    // Replace 'your-password' with the actual password you want to use
    if (password === 'haloguys') {
        window.location.href = 'home.html';
    } else {
        document.getElementById('message').textContent = 'Incorrect password. Please try again.';
        document.getElementById('message').style.display = 'block';
    }
}

function submitForm(event) {
    event.preventDefault();
    var password = document.getElementById('passwordInput').value;

    // Replace 'YourPassword' with the actual password you want to use
    if (password.toLowerCase() === 'petkstorage') {
        window.location.href = 'home.html';
    } else {
        document.getElementById('message').textContent = 'Incorrect password. Please try again.';
        document.getElementById('message').style.display = 'block';
    }
}

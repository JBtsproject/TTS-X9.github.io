// Original JavaScript function from your provided code
function redirectToTemporaryLink() {
  window.location.href = 'https://drive.google.com/drive/u/1/folders/1KAolDOGHRx__WSmkvDNF_tEHRjFdg133';
}

// Function to toggle the dropdown menu
function toggleMenu() {
  var dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
}

// Close the dropdown menu if clicked outside
window.onclick = function (event) {
  if (!event.target.matches('.menu-button')) {
    var dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none';
    }
  }
};

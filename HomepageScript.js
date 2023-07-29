function redirectToTemporaryLink() {
  window.location.href = 'https://drive.google.com/drive/u/1/folders/1KAolDOGHRx__WSmkvDNF_tEHRjFdg133';
}

function redirectToHomePage() {
  window.location.href = 'homepage.html'; // Replace 'homepage.html' with the filename of your homepage
}

function redirectToJadwalTugasPage() {
  window.location.href = 'jadwaltugas.html'; // Replace 'jadwaltugas.html' with the filename of your Jadwal Tugas page
}

function redirectToResourcePage() {
  window.location.href = 'resource.html'; // Replace 'resource.html' with the filename of your Resource page
}

function toggleMenu() {
  var dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
}

window.onclick = function (event) {
  if (!event.target.matches('.menu-button')) {
    var dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none';
    }
  }
};

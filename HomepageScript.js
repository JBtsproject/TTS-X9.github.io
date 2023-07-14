function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const options = { timeZone: 'Asia/Jakarta', hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const timeString = now.toLocaleTimeString('en-US', options);
  clockElement.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);



function redirectToTemporaryLink() {
  window.location.href = 'https://drive.google.com/drive/u/1/folders/1KAolDOGHRx__WSmkvDNF_tEHRjFdg133';
}

function updateClockAndGreeting() {
  var clockElement = document.getElementById('clock');
  var greetingElement = document.getElementById('greeting');

  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes().toString().padStart(2, '0');

  // Function to get the day of the week as a string (0 = Sunday, 6 = Saturday)
  function getDayOfWeekAsString(dayIndex) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }

  // Function to update the greeting based on the time and day
  function updateGreeting() {
    var dayOfWeek = now.getDay();
    var greeting = '';

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      // Weekend (Saturday or Sunday)
      greeting = 'Me Time';
    } else {
      // Weekdays (Monday to Friday)
      if (hours >= 7 && hours < 13) {
        greeting = 'Jam Sekolah';
      } else if (hours >= 13 && hours < 18) {
        greeting = 'Selamat Sore';
      } else if (hours >= 18 || hours < 7) {
        greeting = 'Selamat Malam';
      } else {
        greeting = 'Selamat Pagi';
      }
    }

    greetingElement.textContent = greeting;
  }

  // Update the clock time
  var timeString = hours.toString().padStart(2, '0') + ':' + minutes;
  clockElement.textContent = timeString;

  // Update the greeting
  updateGreeting();
}

// Call the updateClockAndGreeting function to initialize the clock and greeting
updateClockAndGreeting();

// Update the clock and greeting every second
setInterval(updateClockAndGreeting, 1000);


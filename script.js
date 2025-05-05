// Countdown Timer
const countdownElement = document.getElementById('countdown');
const examDate = new Date("May 19, 2025 09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = examDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  countdownElement.innerText = `⏳ EAMCET starts in ${days} day${days === 1 ? '' : 's'}!`;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Run once immediately

// Navigation simulation
function goTo(page) {
    if (page === 'timetable') {
      window.location.href = 'timetable.html';
    } else if (page === 'study') {
      window.location.href = 'study.html';
    } else if (page === 'mock') {
      window.location.href = 'mock.html';
    }
  }
  
const launchDate = new Date("2026-02-22T23:59:59");

function calculteTimeLeft() {
  const now = new Date();
  const difference = launchDate - now;
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function updateClock() {
  const timeLeft = calculteTimeLeft();

  document.querySelector(".days-number span").textContent = String(
    timeLeft.days
  ).padStart(2, "0");
  document.querySelector(".hours-number span").textContent = String(
    timeLeft.hours
  ).padStart(2, "0");
  document.querySelector(".minutes-number span").textContent = String(
    timeLeft.minutes
  ).padStart(2, "0");
  document.querySelector(".seconds-number span").textContent = String(
    timeLeft.seconds
  ).padStart(2, "0");
}

updateClock();
setInterval(updateClock, 1000);

// Our Skills increment Variables
let progressSpans = document.querySelectorAll(".the-progress span");
let theProgressSec = document.querySelector(".our-skills");

// Our Awesome Stats Counter..
// Start Variables
let numbers = document.querySelectorAll(".stats .number");
let statSec = document.querySelector(".stats");
let started = false; // function not started Yet!

// Start onscroll For each element Function
window.onscroll = () => {
  if (window.scrollY >= statSec.offsetTop + 20) {
    // If Function didn't start
    if (!started) {
      // Then Start The Function
      numbers.forEach((num) => startCount(num));
    }
    // Don't Start The Function Again
    started = true;
    // Our Skills increment function
  } else if (window.scrollY >= theProgressSec.offsetTop + 20) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

// Start Counter Function
function startCount(e) {
  // Get Custom Atrr (dataset)
  let goal = e.dataset.goal;

  // Set Interval
  let count = setInterval(() => {
    // Increase The Text Content
    e.textContent++;

    // if Text Content === Goal? > Stop Counter
    if (e.textContent == goal) {
      // Clear Interval
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Set Down Count Timer For The End Of The Year
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Today's Date
  let todayDate = new Date().getTime();

  // Get The Difference Between Today's Date and CountDown Date
  let dateDiff = countDownDate - todayDate;

  // Get Time Unites
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

// Our Skills increment Variables
let theProgressSec = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".the-progress span");

// Our Awesome Stats Counter
let nums = document.querySelectorAll(".stats .number");
let statsSec = document.querySelector(".stats");

// Start onscroll For each element Function
window.addEventListener("scroll", () => {
  if (window.scrollY >= theProgressSec.offsetTop + 20) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

// Function is Active ? / No
let isActive = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSec.offsetTop + 20) {
    if (!isActive) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    isActive = true;
  }
});

// Start Counter Function
function startCount(e) {
  // Get Custom Atr (dataset)
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

// Handle Mega menu
let menu = document.querySelector(".mega-menu");
let link = document.querySelector(".main-nav li:last-child");

link.addEventListener("click", () => {
  menu.classList.toggle("activate")
    ? menu.classList.add("activate")
    : menu.classList.remove("activate");
});

// Handle To Top Button
let upBtn = document.querySelector(".up");
window.onscroll = function () {
  this.scrollY >= 1000
    ? upBtn.classList.add("show")
    : upBtn.classList.remove("show");
};

upBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

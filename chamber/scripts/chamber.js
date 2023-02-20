
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date = new Date();
document.querySelector('#today').innerHTML= weekday[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();


function displayfooter(){
let fyear = new Date().getFullYear();
let currentdate = document.lastModified;
document.querySelector('#last-bar').textContent =  '©' + fyear +"  Rexburg Chamber  " + "|  Jesus Del Barrio  "+"  | WDD 230 "+`|      Last Modification: ${currentdate}`;
}
const dayconf = 2
const banner = document.getElementById("banner");
const today = new Date();
const isTuesday = today.getDay() === dayconf;

if (isTuesday) {
  banner.style.display = "block";
  navbarj = document.getElementById("navi");
  navbarj.style.marginBottom = "0px";
}



// Get the current date in milliseconds
const currentDate = new Date().getTime();

// Get the last visit date from localStorage
const lastVisitDate = localStorage.getItem('lastVisitDate');

if (lastVisitDate) {
  // Calculate the time difference in days
  const timeDiff = (currentDate - parseInt(lastVisitDate)) / (1000 * 60 * 60 * 24);
  const daysSinceLastVisit = Math.round(timeDiff);

  // Display the message to the user
  document.querySelector("#visitdate").innerHTML= `It's been ${daysSinceLastVisit} days since your last visit.`;
}

// Store the current date in localStorage for the next visit
localStorage.setItem('lastVisitDate', currentDate.toString());

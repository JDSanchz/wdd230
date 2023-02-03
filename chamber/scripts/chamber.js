
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

const banner = document.getElementById("banner");
const today = new Date();
const isTuesday = today.getDay() === 5;

if (isTuesday) {
  banner.style.display = "block";
}



async function getWeather() {
    fetch("http://api.weatherapi.com/v1/current.json?key=b29e04a9ceb14fd2989173208230302&q=Rexburg&aqi=no")
    .then(response => response.json())
    .then(data => {
        const temperature = data.current.temp_f;
        const temperatureElement = document.getElementById("temperature");
        temperatureElement.innerHTML = temperature + "°F";
    
        const wimage = document.getElementById("wimage");
        if (temperature < 15) {
            wimage.src = "https://cdn3.iconfinder.com/data/icons/vibrant-weather/70/Colour_Thermometer_freezing-512.png";
        } else if (temperature >= 32 && temperature < 42) {
            wimage.src = "image2.png";
        } else if (temperature >= 42) {
            wimage.src = "image3.png";
        }
    });
  }
  
  getWeather();
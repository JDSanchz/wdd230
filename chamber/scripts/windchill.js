async function getWeather() {
    fetch("http://api.weatherapi.com/v1/current.json?key=b29e04a9ceb14fd2989173208230302&q=Rexburg&aqi=no")
      .then(response => response.json())
      .then(data => {
        const temperature = data.current.temp_f;
        const temperatureElement = document.getElementById("temperature");
        temperatureElement.innerHTML = temperature + "°F";
  
        const windSpeed = data.current.gust_mph;
        const windSpeedElement = document.getElementById("ws");
        windSpeedElement.innerHTML = "Wind Speed: " + windSpeed + " mph";
  
        const windChill = data.current.feelslike_f;
        const windChillElement = document.getElementById("wc");
        if (windChill === 0 || windChill === "N/A") {
          windChillElement.innerHTML = "N/A";
        } else {
          windChillElement.innerHTML = "Wind Chill: " + windChill + "°F";
        }
  
        const wimage = document.getElementById("wimage");
        if (temperature < 15) {
          wimage.src = "images/freezing.png";
        } else if (temperature >= 16 && temperature < 42) {
          wimage.src = "images/cold.png";
        } else if (temperature >= 42) {
          wimage.src = "images/sunny.png";
        }
      });
  }
  
  getWeather();
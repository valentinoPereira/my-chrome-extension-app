function fetchWeatherData() {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?id=1275339&units=metric&APPID=cd026dadd2324b2e76a29b3340940077"
  )
    .then(res => {
      return res.json();
    })
    .then(json => {
      document.getElementById("cityname").innerText = json.name;
      document.getElementById("temperature").innerHTML = json.main.temp + ' &deg;C';
      document.getElementById("pressure").innerText = json.main.pressure;
      document.getElementById("humidity").innerText = json.main.humidity;
    });
}

document.addEventListener("DOMContentLoaded", fetchWeatherData, false);

import "./style.css";
const API_KEY = "b236cde4fa1638400f110d0413f33923";
let currentWeatherData = document.querySelector("[current-weather-data]");
let currentLocationdata = document.querySelector("[location-data]");
let currentWeatherDesData = document.querySelector(
  "[weather-description-data]"
);
let weatherImage = document.querySelector("#icon");
const searchBar = document.getElementById("search");

searchBar.addEventListener("keydown", async (event) => {
  if (event.keyCode === 13) {
    const countryQuery = searchBar.value;
    console.log(await getData(countryQuery));
    let result = await getData(countryQuery);
    currentWeatherData.innerHTML = `${await result.main.temp}°`;
    currentLocationdata.innerHTML = `${await result.name}°`;
    currentWeatherDesData.innerHTML = `The name of of the city you have entered is ${await result.name} the temperature there right now is ${await result
      .main
      .temp} and the Max Temperature Today for ${await result.name} is ${await result
      .main.temp_max} the Longtitude and Latitude are ${await result.coord
      .lon} and ${await result.coord
      .lat} the wind speed is currently ${await result.wind
      .speed} and it is ${await result.weather[0].description}`;
    weatherImage.src = `https://openweathermap.org/img/wn/${await result
      .weather[0].icon}@2x.png`;
  }
});

async function getData(countyReq) {
  try {
    let response = await fetch(
      `//api.openweathermap.org/data/2.5/weather?q=${countyReq}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      console.log("Error", response.status);
    }
    let data = await response.json();
    return data;
  } catch (err) {
    console.log("Error", err);
  }
}

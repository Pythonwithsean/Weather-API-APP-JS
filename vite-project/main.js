import "./style.css";
// API KEY NEEDED
let currentWeatherData = document.querySelector("[current-weather-data]");
const searchBar = document.getElementById("search");

searchBar.addEventListener("keydown", async (event) => {
  if (event.keyCode === 13) {
    const countryQuery = searchBar.value;
    let result = await getData(countryQuery);
    console.log(result);
  }
});

async function getData(countyReq) {
  try {
    let response = await fetch(
      `//api.openweathermap.org/data/2.5/weather?q=${countyReq}&appid=${API_KEY}`
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

//Practiced with Promises

// function getData() {
//   return new Promise(async (res, rej) => {
//     try {
//       const response = await fetch(URL);
//       if (!response.ok) {
//         rej(console.log("Error Failed to connect"));
//       } else {
//         const data = await (await response).json();
//         res(data);
//       }
//     } catch (error) {
//       rej(error);
//     }
//   });
// }

// getData()
//   .then((data) => {
//     console.log(data);
//   })

//   .catch((error) => console.log(error));

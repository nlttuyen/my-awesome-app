let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

//let city = prompt("Enter a city");
//city = city.trim();
//city = city.toLowerCase();
//if (weather[city] !== undefined) {
//let temperature = weather[city].temp;
//let degreeC = Math.round(temperature);
//let degreeF = (degreeC * 9) / 5 + 32;
//let humidity = weather[city].humidity;
//alert(
//`It is currently ${degreeC}°C (${degreeF}°F) in ${city} with a humidity of ${humidity}%`
//);
//} else {
//alert(
//`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//);
//}

//Week 4
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Feature #1: display the current date and time
function formatDate(current) {
  let currentHour = current.getHours();
  let currentMinute = ("0" + current.getMinutes()).slice(-2);
  let currentDay = days[current.getDay()];
  let currentDate = current.getDate();
  let currentMonth = months[current.getMonth()];
  let currentYear = current.getFullYear();
  let currentTime = document.querySelector("#currentDayTime");
  currentTime.innerHTML = `${currentHour}:${currentMinute} ${currentDay}, ${currentDate} ${currentMonth}, ${currentYear}`;
}

formatDate(new Date());

// Feature #2: Display City Name
//function displayCity(event) {
//event.preventDefault();
//let searchInput = document.querySelector("#search-input");
//let currentCity = document.querySelector("#current-city");
//if (searchInput.value) {
// currentCity.innerHTML = `${searchInput.value}`;
//} else {
// currentCity.innerHTML = null;
// alert("Please type a city");
// }
//}
//let searchingForm = document.querySelector("#searching-form");
//searchingForm.addEventListener("submit", displayCity);

// Bonus Feature: Convert Degrees
//function convertDegreeF(event) {
// event.preventDefault();
// let changeDegree = document.querySelector("#currentTemp");
// let fdegree = changeDegree.innerHTML;
// fdegree = Number(fdegree);
// changeDegree.innerHTML = Math.round((fdegree * 9) / 5 + 32);
//}
//let degreeF = document.querySelector("#degree-F");
//degreeF.addEventListener("click", convertDegreeF);

//function convertDegreeC(event) {
// event.preventDefault();
// let changeDegreeC = document.querySelector("#currentTemp");
// let cdegree = changeDegreeC.innerHTML;
// cdegree = Number(cdegree);
//changeDegreeC.innerHTML = Math.round(((cdegree - 32) * 5) / 9);
//}
//let degreeC = document.querySelector("#degree-C");
//degreeC.addEventListener("click", convertDegreeC);

//Week 5
function showData(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#currentTemp");
  temperatureElement.innerHTML = `${temperature}`;
  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#windSpeed");
  windElement.innerHTML = `${wind} km/h`;
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}%`;
  let weatherElement = document.querySelector("#weather-description");
  weatherElement.innerHTML = `${response.data.weather[0].description}`;
}
function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = `${searchInput.value}`;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${city}`;
  let apiKey = "891b772525bcb3bb0a4feca0185de4c3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showData);
}

let searchingForm = document.querySelector("#searching-form");
searchingForm.addEventListener("submit", showCity);
let searchingForm2 = document.querySelector(".searchButton");
searchingForm2.addEventListener("click", showCity);

/////////////////

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey2 = `891b772525bcb3bb0a4feca0185de4c3`;
  let apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey2}&units=metric`;
  axios.get(apiUrl2).then(showCurrentData);
}

function showCurrentData(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#currentTemp");
  temperatureElement.innerHTML = `${temperature}`;
  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#windSpeed");
  windElement.innerHTML = `${wind} km/h`;
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}%`;
  let weatherElement = document.querySelector("#weather-description");
  weatherElement.innerHTML = `${response.data.weather[0].description}`;
  let cityCurrentName = document.querySelector("#current-city");
  cityCurrentName.innerHTML = `${response.data.name}`;
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentButton = document.querySelector("#currentButton");
currentButton.addEventListener("click", getCurrentPosition);

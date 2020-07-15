const searchElement = document.querySelector("[data-city-search]");
const searchBox = new google.maps.places.SearchBox(searchElement);

searchBox.addListener("places_changed", () => {
  const API_KEY = "4d772500c24ac2a391e1c8b350b28631";
  const place = searchBox.getPlaces()[0];
  if (place == null) return;
  const latitude = place.geometry.location.lat();
  const longitude = place.geometry.location.lng();
  fetch(
    `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/forecast?access_key=${API_KEY}&query=${latitude},${longitude}`
  )
    .then((res) => res.json())
    .then((data) => setWeatherData(data, place))
    .catch((error) => {
      console.log(error);
    });
});

const bgElement = document.getElementById("bg").style;
const descElement = document.getElementById("desc");
const regionElement = document.getElementById("region");
const temperatureLowElement = document.getElementById("tempLow");
const temperatureHighElement = document.getElementById("tempHigh");
const windSpeedElement = document.getElementById("windSpeed");
const PrecipitationElement = document.getElementById("precipProb");
const sunRiseElement = document.getElementById("sunRise");
const sunDownElement = document.getElementById("sunDown");

const today = new Date();
const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
const days = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];

const date =
  today.getFullYear() +
  "-" +
  months[today.getMonth()] +
  "-" +
  days[today.getDate() - 2];

function setBgWeather(weatherDesc) {
  const cloudyData = [
    "clouds",
    "patchy",
    "patch",
    "cloudy",
    "overcast",
    "cloud",
  ];
  const sunnyData = ["sun", "sunny"];
  const snowyData = ["snow", "snowy", "blizzard"];
  const rainyData = ["rain", "shower", "rainy", "drizzle"];
  const MistyData = ["mist", "misty", "fog"];

  let i = 0;

  while (i < weatherDesc.length) {
    const weather = weatherDesc[i].toLowerCase();
    if (cloudyData.includes(weather)) {
      return "cloudy.jpg";
    } else if (sunnyData.includes(weather)) {
      return "sunny.jpg";
    } else if (snowyData.includes(weather)) {
      return "snowy.jpg";
    } else if (rainyData.includes(weather)) {
      return "rainy.jpg";
    } else if (MistyData.includes(weather)) {
      return "misty.jpg";
    }
    i++;
  }
  return "clear.jpg";
}

function setWeatherData(data, place) {
  const forcast = data.forecast[date];
  console.log(data);
  regionElement.textContent = data.location.name + ", " + data.location.country;

  descElement.textContent = data.current.weather_descriptions[0];
  const weatherDesc = data.current.weather_descriptions[0].split(" ");
  bgElement.backgroundImage = `url('imgs/${setBgWeather(weatherDesc)}')`;

  temperatureHighElement.textContent = forcast.maxtemp + " C";
  temperatureLowElement.textContent = forcast.mintemp + " C";

  windSpeedElement.textContent = data.current.wind_speed + " Km/h";
  PrecipitationElement.textContent = data.current.precip * 10 + " %";

  sunRiseElement.textContent = forcast.astro.sunrise;
  sunDownElement.textContent = forcast.astro.sunset;
}

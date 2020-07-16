const searchElement = document.getElementById("data-city-search");
const searchBox = new google.maps.places.SearchBox(searchElement);

const API_KEY = "4d772500c24ac2a391e1c8b350b28631";
fetch(
  `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/forecast?access_key=${API_KEY}&query=fetch:ip`
)
  .then((res) => res.json())
  .then((data) => setWeatherData(data))
  .catch((error) => {
    console.log(error);
  });

searchBox.addListener("places_changed", () => {
  const place = searchBox.getPlaces()[0];
  if (place == null) return;
  const latitude = place.geometry.location.lat();
  const longitude = place.geometry.location.lng();
  fetch(
    `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/forecast?access_key=${API_KEY}&query=${latitude},${longitude}`
  )
    .then((res) => res.json())
    .then((data) => setWeatherData(data))
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
  const MistyData = ["mist", "misty", "fog", "haze"];

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

function setWeatherData(data) {
  const date = Object.keys(data.forecast)[0];
  const forcast = data.forecast[date];

  regionElement.textContent = data.location.name + ", " + data.location.country;

  descElement.textContent = data.current.weather_descriptions[0];
  const weatherDesc = data.current.weather_descriptions[0].split(" ");
  bgElement.backgroundImage = `url('imgs/${setBgWeather(weatherDesc)}')`;

  windSpeedElement.textContent = data.current.wind_speed + " Km/h";
  PrecipitationElement.textContent = data.current.precip + " mm";

  temperatureHighElement.textContent = forcast.maxtemp + " C";
  temperatureLowElement.textContent = forcast.mintemp + " C";

  sunRiseElement.textContent = forcast.astro.sunrise;
  sunDownElement.textContent = forcast.astro.sunset;
}

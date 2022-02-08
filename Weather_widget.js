fetch(
  "https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no"
)
  .then((response) => response.json())
  .then((data) => render(data));

const render = (data) => {
  document.querySelector(".location").textContent = data.location.name;
  document.querySelector(".temp").innerHTML = data.current.temp_c;
  document.querySelector(".img").src = `https://` + data.current.condition.icon;
  document.querySelector(".humidity").textContent = data.current.cloud;
  document.querySelector(".wind").textContent = data.current.wind_mph;
};

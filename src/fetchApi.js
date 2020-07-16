export const fetchWeather = fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=$98a6844717b116100bee83101972f294`
)
  .then(response => response.json())
  .then(resJson => {
    console.log(resJson);
  })
  .catch(e => {
    console.log(e);
  });

const API_KEY = '6926a4137c584c1b23b6a6b708e3056e';

const fetchData = position => {
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => setWeatherData(data))
}
const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        
    }
}
const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}
import type { Forecast } from "@/model/forecast";
import axios from "axios";


const getWeather = async (name: string) => {
    let apiKey = "947d545aa373a85fec4b350e51888c2a";
    //Get the geo coordinate and name of city
  let linkGeoCoordinate = "https://api.openweathermap.org/geo/1.0/direct?q=" + name + "&limit=1&appid=" + apiKey
  let axiosRespGeoCoordinate = await axios.get(linkGeoCoordinate);
  let respGeoCoordinate = axiosRespGeoCoordinate.data;

  //Saves the geo coordinate and name of city
  let cityName = respGeoCoordinate[0].name;
  let latCoordinate = respGeoCoordinate[0].lat;
  let lonCoordinate = respGeoCoordinate[0].lon;


  //Gets the weather based on the coordinates
  let linkGeoCoordinateWeather = "https://api.openweathermap.org/data/2.5/weather?lat=" + latCoordinate +"&lon=" + lonCoordinate+"&appid=" + apiKey;
  let axiosRespGeoCoordinateWeather = await axios.get(linkGeoCoordinateWeather);
  let respGeoCoordinateWeather = axiosRespGeoCoordinateWeather.data;

  //Saves the information
  let weatherIcon = "https://openweathermap.org/img/wn/"+ respGeoCoordinateWeather.weather[0].icon + "@2x.png";
  let weatherTemperature = Math.round((respGeoCoordinateWeather.main.temp - 273.15)*10)/10;
  let weatherDescription = respGeoCoordinateWeather.weather[0].description;
  let weatherAdditionalInformation = "Humidity: " + respGeoCoordinateWeather.main.humidity + ". Pressure: " + respGeoCoordinateWeather.main.pressure + ". Wind speed: " + respGeoCoordinateWeather.wind.speed;

  //Gets the forecast based on the coordinates
  let linkForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latCoordinate +"&lon=" + lonCoordinate+"&appid=" + apiKey;
  let axiosRespForecast = await axios.get(linkForecast);
  let respForecast = axiosRespForecast.data;
  

  let arrayForecast = new Array<Forecast>();

  //Saves 5 forecasts and inserts them into arracForecast
  for (let i = 0; i < respForecast.list.length && i < 5; i++) {
    let timeArray = respForecast.list[i].dt_txt.split(" ");
    var forecast = { 
        icon: "https://openweathermap.org/img/wn/" + respForecast.list[i].weather[0].icon + "@2x.png",
        temperature: Math.round((respForecast.list[i].main.temp - 273.15)*10)/10,
        time: timeArray[1]
     };
     arrayForecast.push(forecast);
  }

  //Creates an object with same structure as the weatherInformation interface
  var weatherInformation = 
  {
    name: cityName,
    icon: weatherIcon,
    temperature: weatherTemperature,
    description: weatherDescription,
    additionalInformation: weatherAdditionalInformation,

    forecast: arrayForecast
  }


  return weatherInformation;
}

const weatherService = { getWeather };
export default weatherService
{
    
};


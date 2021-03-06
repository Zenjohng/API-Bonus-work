p// This is our API key
var APIKey = "&appid=398ac92332e1236488fe33bed85d44d3";


// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Anchorage,&appid=398ac92332e1236488fe33bed85d44d3";
console.log(queryURL);

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})


  // We store all of the retrieved data inside of an object called response
  .then(function(response) {
    console.log(queryURL);
    console.log(response);
// Used Jquery to call the response name for current weather conditions
    $(".city").html("<h1>" + response.name + " Current Weather</h1>");
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".wind").text("Wind Speed: " + response.wind.speed);

     // Convert the temp to fahrenheit
     var tempF = (response.main.temp - 273.15) * 1.80 + 32;

     // add temp content to html
    //  $(".temp").text("Temperature (K) " + response.main.temp);
     $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
//set variables for temperature, city, humidity andwind
     var temp = ("Temperature (F) " + tempF.toFixed(2));
     var city = (response.name + " Current Weather");
     var humidity = ("Humidity: " + response.main.humidity);
     var wind = ("Wind Speed: " + response.wind.speed)
//console.log necessary to ensure things are working properly
     console.log(city);
     console.log(temp);
     console.log(humidity);
     console.log(wind);
  });

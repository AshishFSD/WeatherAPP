
let today = new Date().toISOString().slice(0, 10);

// weather API object

let weather = {

      apiKey: "83726eb96b2f5b24f1aa10b19fa264c4", // Api Key

      fetchWeatherData: function (name) {

            fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
                  name +
                  "&units=metric&appid=" +
                  this.apiKey
            )

                  // handling success 

                  .then(response => response.json())  // convert to json
                  .then(data => {
                        //    
                        const { name } = data;
                        const { icon, description } = data.weather[0];
                        const { temp, humidity, temp_min, temp_max } = data.main;
                        const { speed } = data.wind;
                        const { visibility } = data;

                        /*sending data to website*/

                        document.getElementById("city").innerHTML = `Weather in ${name}`; //update city name
                        document.getElementById("weather-icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
                        document.getElementsByClassName("temp")[0].innerHTML = "Temperature " + temp + " °C";
                        document.getElementsByClassName("temp")[1].innerHTML = "Wind " + speed + " Km/S";
                        document.getElementsByClassName("tem-des")[0].innerHTML = description;
                        document.getElementsByClassName("tem-des")[1].value = humidity + "%";
                        document.getElementById("today").innerHTML = today
                        document.getElementsByClassName("min-temp")[0].innerHTML = "Min  Temp 👉 " + temp_min;
                        document.getElementsByClassName("min-temp")[1].innerHTML = " Max Temp  👉 " + temp_max;

                  })






                  .catch(() => {
                        document.getElementById("city").innerHTML = " Oh 😩!! Please search for a valid city ";
                  });// Catch errors.


      }

}



function updateData() {
      let inputCity = document.getElementById("cityName").value;
      const fithData = weather.fetchWeatherData(inputCity);

}

function myFunction() {

      const fithData = weather.fetchWeatherData("PATNA");
}





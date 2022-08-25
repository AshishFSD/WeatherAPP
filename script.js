
 //{city name}&appid={API key}

//============= API related data to get data 
// 
   const weather ={
          apiKey:"9e5ff1177ec94f9a93b743564793548e",
          apiLink: "https://api.openweathermap.org/data/2.5/weather?q=",
          apllied: "&appid=",
          city: "Noida",
          apiCall : function(cityName){
                 let apiFullPath = `${this.apiLink}${cityName}${this.apllied}${this.apiKey}`;
                    return fetch(apiFullPath);
          },

   }

// ==================== Get the DOM element from Web page===============



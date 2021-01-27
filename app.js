window.addEventListener("load",() =>{
  let long;
  let lat;
  let tempIcon = document.getElementById("temp-icon");
  let tempDescription = document.querySelector(".temp-description");
  let tempDegree = document.querySelector(".temp-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let iconFile;
  let tempSection = document.querySelector(".temp");
  const tempSpan = document.querySelector(".temp span");

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=797f600ef70cca493c1a9dda4ba6dd63`;

      fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        const{name} = data;
        const {feels_like} = data.main;
        const {id,description} = data.weather[0];
        tempDegree.textContent = feels_like;
        tempDescription.textContent = description;
        locationTimezone.textContent = name;
        if(id<250){
          tempIcon.src = './icons/animated/thunder.svg'
        }else if(id<350){
          tempIcon.src = './icons/animated/cloudy.svg'
        }else if(id<550){
          tempIcon.src = './icons/animated/rain-1.svg'
        }else if(id<650){
          tempIcon.src = './icons/animated/snowy-1.svg'
        }else if(id<800){
          tempIcon.src = './icons/animated/cloudy-night-2.svg'
        }else if(id===800){
          tempIcon.src = './icons/animated/day.svg'
        }else if(id>800){
          tempIcon.src = './icons/animated/cloudy-day-1.svg'
        }
        
        let celsius = (feels_like - 32) * (5/9);
        tempSection.addEventListener('click',() =>{
          if(tempSpan.textContent === "F"){
            tempSpan.textContent = "C";
            tempDegree.textContent = Math.floor(celsius);
          }else{
            tempSpan.textContent = "F";
            tempDegree.textContent = feels_like;
          }
        });

      });
    });
  } else{
    button.addEventListener('click', function(name){
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=797f600ef70cca493c1a9dda4ba6dd63`;

      fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        const{name} = data;
        const {feels_like} = data.main;
        const {id,description} = data.weather[0];
        tempDegree.textContent = feels_like;
        tempDescription.textContent = description;
        locationTimezone.textContent = name;
        if(id<250){
          tempIcon.src = './icons/animated/thunder.svg'
        }else if(id<350){
          tempIcon.src = './icons/animated/cloudy.svg'
        }else if(id<550){
          tempIcon.src = './icons/animated/rain-1.svg'
        }else if(id<650){
          tempIcon.src = './icons/animated/snowy-1.svg'
        }else if(id<800){
          tempIcon.src = './icons/animated/cloudy-night-2.svg'
        }else if(id===800){
          tempIcon.src = './icons/animated/day.svg'
        }else if(id>800){
          tempIcon.src = './icons/animated/cloudy-day-1.svg'
        }
        
        let celsius = (feels_like - 32) * (5/9);
        tempSection.addEventListener('click',() =>{
          if(tempSpan.textContent === "F"){
            tempSpan.textContent = "C";
            tempDegree.textContent = Math.floor(celsius);
          }else{
            tempSpan.textContent = "F";
            tempDegree.textContent = feels_like;
          }
        });

      });
    });

  }
});

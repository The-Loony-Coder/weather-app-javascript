let timezone = document.querySelector(".location-timezone");
let degree = document.querySelector(".temperature-degree");
let tdescription = document.querySelector(".temperature-description");
let icon = document.getElementById("tempicon");

window.addEventListener("load",()=> {
    let long;
    let lat;
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            //console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `https://api.openweathermap.org/data/2.5/weather?id=1275841&appid=df43c3d2d642ab0aee39e5968bee2e14`;//it(metaweather app) works without proxy also
            //console.log(api);
            fetch(api)
            .then(response => {return response.json();})
            .then(data => 
                {
                    console.log(data)
                    
                    
                    icon.src="assets/animated/cloudy.svg"
                    degree.textContent=Math.round(data.main.temp-273);//  or you can use data destructuring
                    const {name} = data;
                    const {id,main,description} = data.weather[0];
                    
                   
                    const {feels_like} = data.main;
                    timezone.innerHTML=name;
                    tdescription.innerHTML = description;// instead of innerhtml we can also use textContent
                    
                    if(id<250)
                    {
                        storm
                    }
                    else if(id<350)
                    {
                        drizzlw
                    }
                    else if(id < 550)
                    {
                        rain
                    }
                    else if (id < 650)
                    {
                        ''
                        ''
                    }
                    else if (id < 800)
                    {
                        atmosphere
                    }
                    else if ( id===800)
                    {
                        clear
                    }
                    else if (id > 800)
                    {
                        cloud
                    }
                   
                    
                })
            
        })
    }
})
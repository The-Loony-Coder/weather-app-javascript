window.addEventListener("load",()=> {
    let long;
    let lat;
    let temp_description = document.querySelector(".temperature-degree");
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
                    const lon = data.coord.lon; //also use destructuring.. const [lon]= data.coord
                    const lat = data.coord.lat;
                    let iconchange = document.querySelector("#tempicon")
                    iconchange.src="/sun.svg"
                    temp_description.textContent=data.main.temp;
                    console.log(temp_description)
                })
            
        })
    }
})
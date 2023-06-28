console.log("Hello from the console!");

// Your code here

fetch('https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=bcb83c4b54aee8418983c2aff3073b3b')
    .then( (response) => {
        if (response.ok) {
            const weather = response.json();
            console.log(weather);
        } else {
            throw(new Error(response));

        }
    })
    .then((response) => {console.log("Ajax request was a success!")}, 
    (err) => {console.log("Error, Ajax request was a failure")})
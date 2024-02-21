const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    const city = req.body.cityName;
    const apiKey = "57f1f09d5913691473f418a4fe1e1220&units";
    const units = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + apiKey +"&units=" + units
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherdata = JSON.parse(data)
            const temp = weatherdata.main.temp
            const weatherDescription = weatherdata.weather[0].description
            const icon = weatherdata.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The tempreature in "+ city +" is " + temp + " degree celcius</h1>")
            res.write("<img src =" + imageURL + ">");
            res.send();
        })
    })
})

app.listen(3000, function(){
    console.log("server running in port 3000");
})







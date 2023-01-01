
// https://api.openweathermap.org/data/2.5/forecast?lat=51.507218&lon=-0.127586&appid=b1251da55c6b466dba642669f628fd34
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=b1251da55c6b466dba642669f628fd34

var API_KEY = 'appid=b1251da55c6b466dba642669f628fd34';
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Bujumbura,Burundi&appid=" + API_KEY;

var forcastBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast?';

var geoBaseUrl = 'https://api.openweathermap.org/geo/1.0/direct?';
// city variable is user input:
// var searchString = "";
var city = 'New York';

// $.ajax({
//     url: queryURL,
//     method: "GET"
// })
//     .then(function (response) {
//         console.log(queryURL);
//         console.log(response);
//         $(".city").html("<h1>" + response.name + " Weather Details</h1>");
//         $(".wind").text("Wind Speed: " + response.wind.speed);
//         $(".humidity").text("Humidity: " + response.main.humidity);
//         console.log("Wind Speed: " + response.wind.speed);
//         console.log("Humidity: " + response.main.humidity);
//     });

$.ajax({
    url: `${geoBaseUrl}q=${city}&limit5&${API_KEY}`,
    type: "GET"
}).then(function (response) {
    console.log(response);


    //     var trEl = $('<tr>');
    // var tdTitleEl = $('<td>').text(response.lat);
    // var lat = .text(response.lat);
    // var lon = console.log(response.lon);

});





$.ajax({
    url: `${forcastBaseUrl}&lat=51.507218&lon=-0.127586&&${API_KEY}`,
    type: "GET"
}).then(function (response) {
    console.log(response);

    console.log(response.city.name);
});






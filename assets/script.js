
// https://api.openweathermap.org/data/2.5/forecast?lat=51.507218&lon=-0.127586&appid=b1251da55c6b466dba642669f628fd34
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=b1251da55c6b466dba642669f628fd34

var API_KEY = 'appid=b1251da55c6b466dba642669f628fd34';

var forcastBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast?';

var geoBaseUrl = 'https://api.openweathermap.org/geo/1.0/direct?';

// city variable is user input:
// var searchString = "";
var city = 'New York';

var check = 0

$.ajax({
    url: `${geoBaseUrl}q=${city}&limit=1&${API_KEY}`,
    type: "GET"
})
    .then(function (response) {
        console.log(response);
        var lat = console.log(response[0].lat);
        var lon = console.log(response[0].lon);
        check=++
    })

    $.ajax({
        url: `${forcastBaseUrl}${lat}&${lon}&${API_KEY}`,
        type: "GET"
    }).then(function (response) {
        console.log(response);
        
    })



    //     var trEl = $('<tr>');
    // var tdTitleEl = $('<td>').text(response.lat);
    // var lat = .text(response.lat);
    // var lon = console.log(response.lon);





// search button:
// $("#search-button").on("click", function() {

// }
// );






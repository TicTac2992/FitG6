// Effect to slide in header elements on document load.
$(document).ready(function(){
    $(".hidden").slideDown(1000);
});

// Array and for loop for each Day of the week.
var dayBlocks = [ 5, 6, 7, 8, 9, 10, 11];


for (var i = 0; i < dayBlocks.length; i++) {
    var myValue = localStorage.getItem(dayBlocks[i]);


    $(".day" + dayBlocks[i]).val(myValue);
}

// Event listner set used to save to local storage using the setItem method.
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var keyValue  = $(this).siblings(".form-control").val();
    var key = $(this).parent().data("day");
    
    localStorage.setItem(key, keyValue);

});

// Array and for loop for each goal.
var goalBlocks = [1, 2, 3, 4];


for (var i = 0; i < goalBlocks.length; i++) {
    var myValue2 = localStorage.getItem(goalBlocks[i]);


    $(".goal" + goalBlocks[i]).val(myValue2);
}
        
// Event listner set used to save to local storage using the setItem method that includes passing
// the key and key value to the updateChart function.
$(".saveBtn1").on("click", function(event) {
    event.preventDefault();
    var keyValue2  = $(this).siblings(".form-control1").val();
    var key2 = $(this).parent().data("goal");
    localStorage.setItem(key2, keyValue2);
    updateChart(key2, keyValue2);
    
});

// Create an instance of a pie chart
var chart = anychart.pie();

// set the data
chart.data([
        [$(".goal1").val(), 2.5],
        [$(".goal2").val(), 2.5],
        [$(".goal3").val(), 2.5],
        [$(".goal4").val(), 2.5]
]);
// enable aqua style
chart.fill("aquastyle");
// set chart title
chart.title("Daily Goals");
// set the container element 
chart.container("containerPie");
// initiate chart display
chart.draw();
// Function to dynamically update the data in the pie chart.
function updateChart(index, value) {
    chart.data([
        [$(".goal1").val(), 2.5],
        [$(".goal2").val(), 2.5],
        [$(".goal3").val(), 2.5],
        [$(".goal4").val(), 2.5]
    
]);
// Function call to display chart with updated data.
    chart.draw();
}

// Event listner on face icons to call API and return a random motivational quote.
$(".faceBtn").on("click", function() {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    // For loop to generate a random number. 
        for (var i = 0; i < 99; i++) {
            var quoteChoices = data[Math.floor(Math.random() * 100)]
        }
    // This series clears exsisting quotes and related author refence and appends new quote
    // and author.
    $("blockquote").empty();
    $("cite").empty();
    $("blockquote").append(quoteChoices.text);
    $("cite").append(quoteChoices.author);
        
    });
});

// Click event for initiating user input based API Call
$(".btn-city").on("click", function() {
    // Variables to get the city designated by user input and to house API key
    var userCity = $(".thisCity").val().trim();
    var apiKey = "b15b2b973a104648ff62868774ec5427";
    // URL for API call
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&appid=" + apiKey;
    // 5-Day Forecast API CAll
    $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
            // Clears previous appended responses
            $(".5day").empty();

            // Day1 Card
            $(".5day").append("<div class='card-section g6card day1'>");
            var day1Time = new Date(response.list[3].dt * 1000);
            $(".day1").append("<h5>" + day1Time.toLocaleDateString("en-US") + "</h5>");
            $(".day1").append(`<img src="https://openweathermap.org/img/wn/${response.list[3].weather[0].icon}@2x.png">`);
            var day1TempF = (response.list[3].main.temp - 273.15) * 1.80 + 32;
            $(".day1").append("<p>" + "Temp: " + day1TempF.toFixed(2) + " °F" + "</p>");
            $(".day1").append("<p>" + "Humidity: " + response.list[3].main.humidity + " %" + "</p>");
    
            // Day2 Card
            $(".5day").append("<div class='card-section g6card day2'>");
            var day2Time = new Date(response.list[11].dt * 1000);
            $(".day2").append("<h5>" + day2Time.toLocaleDateString("en-US") + "</h5>");
            $(".day2").append(`<img src="https://openweathermap.org/img/wn/${response.list[11].weather[0].icon}@2x.png">`);
            var day2TempF = (response.list[11].main.temp - 273.15) * 1.80 + 32;
            $(".day2").append("<p>" + "Temp: " + day2TempF.toFixed(2) + " °F" + "</p>");
            $(".day2").append("<p>" + "Humidity: " + response.list[11].main.humidity + " %" + "</p>");
    
            // Day3 Card
            $(".5day").append("<div class='card-section g6card day3'>");
            var day3Time = new Date(response.list[19].dt * 1000);
            $(".day3").append("<h5>" + day3Time.toLocaleDateString("en-US") + "</h5>");
            $(".day3").append(`<img src="https://openweathermap.org/img/wn/${response.list[19].weather[0].icon}@2x.png">`);
            var day3TempF = (response.list[19].main.temp - 273.15) * 1.80 + 32;
            $(".day3").append("<p>" + "Temp: " + day3TempF.toFixed(2) + " °F" + "</p>");
            $(".day3").append("<p>" + "Humidity: " + response.list[19].main.humidity + " %" + "</p>");
    
            // Day4 Card
            $(".5day").append("<div class='card-section g6card day4'>");
            var day4Time = new Date(response.list[27].dt * 1000);
            $(".day4").append("<h5>" + day4Time.toLocaleDateString("en-US") + "</h5>");
            $(".day4").append(`<img src="https://openweathermap.org/img/wn/${response.list[27].weather[0].icon}@2x.png">`);
            var day4TempF = (response.list[27].main.temp - 273.15) * 1.80 + 32;
            $(".day4").append("<p>" + "Temp: " + day4TempF.toFixed(2) + " °F" + "</p>");
            $(".day4").append("<p>" + "Humidity: " + response.list[27].main.humidity + " %" + "</p>");
    
            // Day5 Card
            $(".5day").append("<div class='card-section g6card day5'>");
            var day5Time = new Date(response.list[35].dt * 1000);
            $(".day5").append("<h5>" + day5Time.toLocaleDateString("en-US") + "</h5>");
            $(".day5").append(`<img src="https://openweathermap.org/img/wn/${response.list[35].weather[0].icon}@2x.png">`);
            var day5TempF = (response.list[35].main.temp - 273.15) * 1.80 + 32;
            $(".day5").append("<p>" + "Temp: " + day5TempF.toFixed(2) + " °F" + "</p>");
            $(".day5").append("<p>" + "Humidity: " + response.list[35].main.humidity + " %" + "</p>");
    
    });

});


        




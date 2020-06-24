//                      Page Three Personal Notes
        //Continuous pagination for navbar
        //Weekly journal header animation
        //Text areas for each Day of the week needs text to persist
        //Text area persisting needs to be designated by user by save button
var dayBlocks = [ 5, 6, 7, 8, 9, 10, 11];


for (var i = 0; i < dayBlocks.length; i++) {
    var myValue = localStorage.getItem(dayBlocks[i]);


    $(".day" + dayBlocks[i]).val(myValue);
}

//Event listner set used to save to local storage using the setItem method.
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var keyValue  = $(this).siblings(".form-control").val();
    var key = $(this).parent().data("day");
    
    localStorage.setItem(key, keyValue);

});

//                      Page One Daily Goals
        // Drop down pagination for Navbar
        // Jumbotron fade in function to welcome user
        // slider corresponds to specific goal to show as completed or not
            //goal completed corresponds to pie chart below
        //celebratory function initiates when all goals are completed
        //Use D3.js to add pie chart functionality
        //styles activate faces based on weather or not checkbox is filled
        // When checkbox is checked inspirational quote appears and check box is hidden

        var goalBlocks = [1, 2, 3, 4];


        for (var i = 0; i < goalBlocks.length; i++) {
            var myValue2 = localStorage.getItem(goalBlocks[i]);
        
        
            $(".goal" + goalBlocks[i]).val(myValue2);
        }
        
        //Event listner set used to save to local storage using the setItem method.
        $(".saveBtn1").on("click", function(event) {
            event.preventDefault();
            var keyValue2  = $(this).siblings(".form-control1").val();
            var key2 = $(this).parent().data("goal");
            localStorage.setItem(key2, keyValue2);
            updateChart(key2, keyValue2);
            
        });
            
        // create an instance of a pie chart
        var chart = anychart.pie();
        // var pieGoal1 = $(".goal1").val();
        
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

        function updateChart(index, value) {
            chart.data([
                [$(".goal1").val(), 2.5],
                [$(".goal2").val(), 2.5],
                [$(".goal3").val(), 2.5],
                [$(".goal4").val(), 2.5]
            
        ]);
            chart.draw();
        }
                
        
        
        anychart.onDocumentLoad(function () {
            
        });
        //              Page Two Weekly Breakdown
        // Continuous pagination for navbar
        // Update bar showing weeks worth of completed goals needs to fill comapritively with percent of total completion
        // Will show integer percentage under update bar and change with percent completed
        // Use D3.js to add interactive graph
        // graph should correspond with checkboxes
        // 7-Day Forcast implements API call to open weather and returns data.

        // var tooltipChart = null;
        // var title = null;
        // anychart.onDocumentReady(function () {
        //     var data = anychart.data.set([
        //         ['Sunday', 10000, 6000, 3200, 2159, 2089],
        //         ['Monday', 10000, 2367, 1989, 2383, 4199],
        //         ['Tuesday', 10000, 2156, 2399, 2867, 2567],
        //         ['Wednesday', 10000, 2398, 2225, 3010, 2593],
        //         ['Thursday', 10000, 2851, 3007, 2805, 2341],
        //         ['Friday', 10000, 3400, 2105, 2563, 2866],
        //         ['Saturday', 10000, 2878, 2933, 3561, 1903]
        //     ]);
        
        //     var dataMapping = data.mapAs({x: 0, value: 1});
        
        //     chart = anychart.column(dataMapping);
        
        //     var tooltip = chart.tooltip();
        //     tooltip.useHtml(true);
        //     tooltip.separator(false);
        
        //     // Create a tooltip chart and title.
        //     tooltip.onDomReady(function() {
        //         this.contentElement.style.width = '200px';
        //         this.contentElement.style.height = '150px';
        //         tooltipChart.container(this.contentElement);
        //         tooltipChart.draw();
        
        //         this.titleElement.style.width = '200px';
        //         this.titleElement.style.height = '60px';
        //         title.container(this.titleElement);
        //         title.draw();
        
        //     });
        
        //     tooltip.onBeforeTitleChange(function() {
        //         // Prevent overriding content of this.titleElement
        //         return false;
        //     });
        
        //     tooltip.onBeforeContentChange(function() {
        //         // Prevent overriding content of this.contentElement
        //         return false;
        //     });
        
        //     chart.listen('pointMouseOver', function(e) {
        //         var index = e.pointIndex;
        //         var dataRow = data.row(index);
        //         tooltipChart = tooltipChart || createChart();
        //         tooltipChart.data([
        //             {x: 'Goal 1', value: dataRow[2]},
        //             {x: 'Goal 2', value: dataRow[3]},
        //             {x: 'Goal 3', value: dataRow[4]},
        //             {x: 'Goal 4', value: dataRow[5]}
        //         ]);
        //         title = title || anychart.standalones.title();
        //         title.text("Goals Completed for " + dataRow[0]);
        //         title.fontColor('#ffffff');
        //     });
        
        //     chart.title('Fitness Goals Progress by Days of The Week:');
        //     chart.container('container');
        //     chart.draw();
        // });
        
        // function createChart() {
        //     var chart = anychart.bar();
        //     chart.title().fontSize(12);
        //     chart.xAxis().stroke(null).ticks(false);
        //     chart.xAxis().labels().fontSize(10);
        //     chart.yAxis().labels().fontSize(10);
        //     chart.padding([0, 12, 0, 0]);
        //     return chart;
        // };

$(".btn-city").on("click", function() {
        var userCity = $(".thisCity").val().trim();
        var apiKey = "b15b2b973a104648ff62868774ec5427";
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&appid=" + apiKey;

        $.ajax({
                url: queryURL,
                method: "GET"
              }).then(function(response) {
                console.log(response);
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


        




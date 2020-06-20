//                      Page One Daily Goals
        // Drop down pagination for Navbar
        // Jumbotron fade in function to welcome user
        // slider corresponds to specific goal to show as completed or not
            //goal completed corresponds to pie chart below
        //celebratory function initiates when all goals are completed
        //Use D3.js to add pie chart functionality
        //styles activate faces based on weather or not checkbox is filled
        // When checkbox is checked inspirational quote appears and check box is hidden
        
//                      Page Two Weekly Breakdown
        //Continuous pagination for navbar
        //Update bar showing weeks worth of completed goals needs to fill comapritively with percent of total completion
        //Will show integer percentage under update bar and change with percent completed
        //Use D3.js to add interactive graph
        //graph should correspond with checkboxes
        //7-Day Forcast implements API call to open weather and returns data.

//                      Page Three Personal Notes
        //Continuous pagination for navbar
        //Weekly journal header animation
        //Text areas for each Day of the week needs text to persist
        //Text area persisting needs to be designated by user by save button
        

var dayBlocks = [1, 2, 3, 4, 5, 6, 7];


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


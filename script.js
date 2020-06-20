//                      Page One Daily Goals
        // Drop down pagination for Navbar
        // Jumbotron fade in function to welcome user
        // slider corresponds to specific goal to show as completed or not
            //goal completed corresponds to pie chart below
        //celebratory function initiates when all goals are completed
        //Use D3.js to add pie chart functionality
        //styles activate faces based on weather or not checkbox is filled
        // When checkbox is checked inspirational quote appears and check box is hidden
        fetch("https://type.fit/api/quotes")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data);
        });
      
        const settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://type.fit/api/quotes",
          "method": "GET"
        }
        
        $.ajax(settings).done(function (response) {
          const data = JSON.parse(response);
          console.log(data);
        });        
        
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
        

        
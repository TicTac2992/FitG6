# Week 7/Project-1-fitG6/
<img src="https://www.pngitem.com/pimgs/m/520-5208614_curso-programacin-front-end-completo-transparent-html-css.png" width="100" height="100"> <img src="https://i.stack.imgur.com/dMXbE.png" width="125" height="100"><img src="https://i.dlpng.com/static/png/7044135_preview.png" width="150" height="100">

## A fitness application submitted as project 1 for week 7 by Jared Varnum, Tammy Cuthbert and Thomas Bragg.

* [Github Repository](https://github.com/TicTac2992/project-1-fitG6)
* [Github Deployed Site](https://tictac2992.github.io/project-1-fitG6/)

### Summary:
This project utilizes HTML and CSS styles to build out a dashboard that offers the user a way to input goals and visualize these goals in a dynamically minipulated pie chart. We take use of multiple APIs and Third Party APIs to leverage the DOM in a manner that delivers the user data calculators for varity of health and wellness elements. The user has options to maintain a journal of persisting text through out the week by way of local storage and can offer emotional icons to generate a motivational quote. 

<img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/OpenWeather-Logo.jpg" align="right" width="400" height="220">

### Pseudo Code:
##### HTML:
* Header
* Logo
* NavBar could be to separate areas on the same pag
* API Call 1 Inspirational quote
* API 2 OpenWeather
* Third Party API  D3.js 
* Psychology portion, happyface to sad face, can have 5 choices - these will be buttons - the image itself could be a button 
* Note field where user can input their notes, and can serve as a journal over time

##### CSS:
* Build out with Foundation!!! 
* PAGE ONE DAILY GOALS 
    * Navbar styling 
    * Jumbotron style element for "todays goals" 
    * Styling for todays goals sliders and classes to change incomplete to completed 
    * Card style for text heading and circle pie chart content 
    * Emotional faces elements 
    * Style for checkboxes below face elements 
    * Style for inspirational quote 

* PAGE TWO WEEKLY BREAKDOWN 
    * continuous navbar styling 
    * Style for completed goals for the week bar 
    * Calender styling aligning with graph
    * Chekbox styling aligning with graph 
    * Jumbotron style for weather forcast 
    * Styling for weather forcast 

* PAGE THREE PERSONAL NOTES 
    * Continuous navbar styling 
    * Styles for days of the week and Header 
    * Styles for jumbotron text area 
    * Use google fonts to add styled font 

##### Javascript:
* Page One Daily Goals
    * Drop down pagination for Navbar
    * Jumbotron fade in function to welcome user
    * slider corresponds to specific goal to show as completed or not
    * goal completed corresponds to pie chart below
    * celebratory function initiates when all goals are completed
    * Use D3.js to add pie chart functionality
    * styles activate faces based on weather or not checkbox is filled
    * When checkbox is checked inspirational quote appears and check box is hidden
        
* Page Two Weekly Breakdown
    * Continuous pagination for navbar
    * Update bar showing weeks worth of completed goals needs to fill comapritively with percent of total completion
    * Will show integer percentage under update bar and change with percent completed
    * Use D3.js to add interactive graph
    * graph should correspond with checkboxes
    * 7-Day Forcast implements API call to open weather and returns data.

* Page Three Personal Notes
    * Continuous pagination for navbar
    * Weekly journal header animation
    * Text areas for each Day of the week needs text to persist
    * Text area persisting needs to be designated by user by save button

<img src="https://pbs.twimg.com/profile_images/775739867217162240/HCJ1GpAx.jpg" width="120" height="100"> <img src="https://www.verywellfit.com/thmb/arXd1eA2ULnPkH7kVDDVNBKaDF0=/400x400/filters:no_upscale():max_bytes(150000):strip_icc()/tool-icon_Dailycaloriesburned-48ddbedf839d4398be7489e1d63aef7d.png" width="120" height="100">

### Features:
* An option to input a series of 4 goals that will persist by a save button and then be dynamically upted in the pie chart below.
* A motivational quote API call that is triggered by button click indicating the users current emotion in an emotional icon.
* An API Call returning a 5 day Forecast displaying the date, temperature, an image accompanying the weather type and the humidity.
* Using verywellfit we incorporated functionality to calculate your pace, set your calorie goal or meal planning,learn your body fat percentage and final form to calculate body mass index. 
* Finally the user has the option to maintain a weekly journal to cataloge the users thoughts and feelings. 

#### Screenshot of deployed application
![](Assets/index.png)
![](Assets/index2.png)
![](Assets/index3.png)
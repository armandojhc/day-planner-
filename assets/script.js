var todaysSchedule = ["", "", "", "", "", "", "", "", ""];
var todayAtMidnight = null;
var rightNow = new moment();

$(document).ready(function() {

    //testLocalStorage()

    

    var jumbotronDate = rightNow.format('dddd , MMMM Do');

    $("#currentDay").text(jumbotronDate);

    //Create a moment for today at midnight

    var yearRightNow = rightNow.format('YYYY');
    var monthRightNow = rightNow.format('MM');
    var dayRightNow = rightNow.format('DD');

    

    todayAtMidnight = new moment(yearRightNow+monthRightNow+dayRightNow, "YYYYMMDD");
    
    testTime = new moment(todayAtMidnight);
    testTime.add(13, "hours");

    loadSchedule()

    

});

function loadSchedule() {

    var myScheduleText = localStorage.getItem("schedule");

    console.log(myScheduleText);

    if (myScheduleText != null) {

        todaysSchedule = JSON.parse(myScheduleText);

    }

    populateSchedule()

}

function populateSchedule() {

    //Iterate over all the entries in the schedule

    //for each, we have to (using jQuery) make a row, make a time div, make description and textarea

    //   Created for loop that generates 
    
    for (var i = 0 ; i < 9; i++) {

        var row= $('<div class="row"></div>')
        row.addClass("");
            var timeBlock = $('<div class ="time-block" ></div>');
            timeBlock.text();

            row.append(timeBlock);
        
                var hour = $('<div class="hour"></div>');
                

                timeBlock.append(hour);
        
                    var time= $('<p></p>');
                    
                    var currentCalendarTime = new moment(todayAtMidnight);
                    currentCalendarTime.add(i+9, "hours");
                    // console.log(currentCalendarHour);
                    
                    var currentCalendarHour= parseInt(currentCalendarTime.format('H'));

                    var rightNowHour= parseInt(rightNow.format('H'));

                    console.log(typeof currentCalendarHour, typeof rightNowHour);

                    time.text(currentCalendarTime.format("h A"));

                    hour.append(time);

            var description = $('<div class="description"></div>');
            
            if (currentCalendarHour < rightNowHour) {
                description.addClass("past");
            } else if (currentCalendarHour === rightNowHour) {
                description.addClass("present");
            }else {
                description.addClass("future");
            }

            row.append(description);

                var textArea = $('<textarea style="border: solid;"></textarea>');
                textArea.val(todaysSchedule[i]);
                description.append(textArea);


             //  Event listeners for the buttons that saves the information in to the localstorage.
            //  How do we know which button corresponds to which text area?

            var saveBtn = $('<button onclick="saveDataBtn(' + i +')" class="saveBtn"></button');
            saveBtn.html("&#128274")
            
            row.append(saveBtn);


        $(".container").append(row);

        //console.log(row);

        // This is where I try to write the function that I call in line 84 with the onclick listener 
        // I try to create a variable that grabs what ever was entered in the textArea and saves it to the local storage 
           

        //Now we have to determine which hour we're dealing with
        // var thisHoursTime = todayAtMidnight;
        // thisHoursTime.add(i + 9, "hours");
        // console.log(thisHoursTime);


    }



}

function saveDataBtn (buttonIndex) {
    var textAreaContent = $('textarea:eq(' + buttonIndex +')').val();
    
    todaysSchedule[buttonIndex]= textAreaContent
    
    //textarea: eq(3)
    
    
    console.log(todaysSchedule);

    localStorage.setItem("schedule" , JSON.stringify(todaysSchedule));
}
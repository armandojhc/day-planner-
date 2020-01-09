var todaysSchedule = ["", "", "", "", "", "", "", ""];
var todayAtMidnight = null;

$(document).ready(function() {

    //testLocalStorage()

    var rightNow = new moment();

    var jumbotronDate = rightNow.format('dddd , MMMM Do');

    $("#currentDay").text(jumbotronDate);

    //Create a moment for today at midnight

    var yearRightNow = rightNow.format('YYYY');
    var monthRightNow = rightNow.format('MM');
    var dayRightNow = rightNow.format('DD');

    todayAtMidnight = new moment(yearRightNow+monthRightNow+dayRightNow, "YYYYMMDD");
    


    loadSchedule()

    

});

function loadSchedule() {

    var myScheduleText = localStorage.getItem("schedule");

    // console.log(myScheduledText);

    if (myScheduleText != null) {

        todaysSchedule = JSON.parse(myScheduleText);

    }

    populateSchedule()

}

function populateSchedule() {

    //Iterate over all the entries in the schedule

    //for each, we have to (using jQuery) make a row, make a time div, make description and textarea

    
    for (var i = 0 ; i < 8; i++) {

        var row= $('<div class="row"></div>')

            var timeBlock = $('<div class ="time-block" ></div>');
            timeBlock.text();

            row.append(timeBlock);
        
                var hour = $('<div class="hour"></div>');
                hour.text(i);

                timeBlock.append(hour);
        
                    var time= $('<p></p>');
                    time.text();

                    hour.append(time);

            var description = $('<div class="description"></div>');
            
            row.append(description);

                var textArea = $('<textarea style="border: solid ; background-color: lime">"Hello"</textarea>');
                description.append(textArea);

            var saveBtn = $('<button class="saveBtn">&#128274</button');
            row.append(saveBtn);


        $(".container").append(row);

        console.log(row);

        //Now we have to determine which hour we're dealing with
        // var thisHoursTime = todayAtMidnight;
        // thisHoursTime.add(i + 9, "hours");
        // console.log(thisHoursTime);


    }

}

//schedule  //"[\"something\", \"\", \"\", "lunch", "", "nap", "", "emails"]"
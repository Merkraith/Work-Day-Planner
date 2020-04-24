$(document).ready(function () {

    // variable for hours of the day set
    let workHours = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"];

    // display current day 
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    let storedItem ;

    for (i = 0; i < workHours.length; i++) {
        console.log(workHours[i])
        let row = $("<div>").addClass("row")
        let timeCol = $("<text-area>").addClass("col-2 timecol").text(workHours[i]);
        let inputCol = $("<input>").attr("placeholder", "Enter note here").addClass("col-8 noteinput");
        let saveBtn = $("<button>").addClass("col-2 btn btn-primary saveBtn").text("save");
        $("#daily-planner").append(row)
        $(".row").append(timeCol).append(inputCol).append(saveBtn);
       
    }
    let saveBtn = $(".saveBtn");
    
    $(saveBtn).on("click", function (event) {
        event.preventDefault();
        let toDo = $(".noteInput").val().trim();
        localStorage.setItem("storedItem", JSON.stringify(toDo)) 
        console.log(localStorage.getItem("storedItem"));
    });
})



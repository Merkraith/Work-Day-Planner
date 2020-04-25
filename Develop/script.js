$(document).ready(function () {

    // variable for hours of the day set
    let workHours = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"];

    // display current day 
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));



    for (i = 0; i < workHours.length; i++) {
        console.log(workHours[i])
        $(`<div class="col-2 time-block"></div>`).text(workHours[i]).appendTo(".row");
        $(`<textarea class="col-8 note-input" id="input-${i}"></textarea>`).attr("placeholder", "Enter note here").appendTo(".row");
        $(`<button class="col-2 btn btn-primary saveBtn" id="hour-${i}"></button>`).text("save").appendTo(".row");
    }

    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        let userInput = $(".note-input").val().trim();
        let storedItem = $(this).attr("id");
        localStorage.setItem(storedItem, JSON.stringify(userInput))
        console.log(localStorage.getItem(storedItem));
        console.log($(this).attr("id"));
    });
})
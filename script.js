$(document).ready(function () {

    // variable for hours of the day set
    let workHours = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"];

    // display current day 
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));


    // For Loop creates all hourly rows and assigns classes and ID
    for (i = 0; i < workHours.length; i++) {
        console.log(workHours[i])
        $(`<div class="col-2 time-block"></div>`).text(workHours[i]).appendTo(".row");
        $(`<textarea class="col-8 note-input" id="input-${i}"></textarea>`).attr("placeholder", "Enter note here").appendTo(".row");
        $(`<button class="col-2 btn btn-primary saveBtn" id="hour${i}"></button>`).text("save").appendTo(".row");
    }

     // A button to clear out any previously saved user input data
     $(`<button class="=btn btn-primary clear"></button>`).text("clear").appendTo(".clear");

     $(".clear").on("click", function (event) {
         event.preventDefault();
         localStorage.clear();
         location.reload()
     });

     // with moment.js we get realtime hours
    let now = new Date().getHours();

    // for each row id, we check the current hour and give it a past, present or future value

    if (now > 9) {
        $("#input-0").addClass("past");
    }
    else if (now >= 9 && now < 10) {
        $("#input-0").addClass("present");
    }
    else if (now < 9) {
        $("#input-0").addClass("future");
    }

    if (now > 10) {
        $("#input-1").addClass("past");
    }
    else if (now >= 10 && now < 11) {
        $("#input-1").addClass("present");
    }
    else if (now < 10) {
        $("#input-1").addClass("future");
    }

    if (now > 11) {
        $("#input-2").addClass("past");
    }
    else if (now >= 11 && now < 12) {
        $("#input-2").addClass("present");
    }
    else if (now < 11) {
        $("#input-2").addClass("future");
    }

    if (now > 12) {
        $("#input-3").addClass("past");
    }
    else if (now >= 12 && now < 13) {
        $("#input-3").addClass("present");
    }
    else if (now < 12) {
        $("#input-3").addClass("future");
    }

    if (now > 13) {
        $("#input-4").addClass("past");
    }
    else if (now >= 13 && now < 14) {
        $("#input-4").addClass("present");
    }
    else if (now < 13) {
        $("#input-4").addClass("future");
    }

    if (now > 14) {
        $("#input-5").addClass("past");
    }
    else if (now >= 14 && now < 15) {
        $("#input-5").addClass("present");
    }
    else if (now < 14) {
        $("#input-5").addClass("future");
    }

    if (now > 15) {
        $("#input-6").addClass("past");
    }
    else if (now >= 15 && now < 16) {
        $("#input-6").addClass("present");
    }
    else if (now < 15) {
        $("#input-6").addClass("future");
    }

    if (now > 16) {
        $("#input-7").addClass("past");
    }
    else if (now >= 16 && now < 17) {
        $("#input-7").addClass("present");
    }
    else if (now < 16) {
        $("#input-7").addClass("future");
    }

    if (now > 17) {
        $("#input-8").addClass("past");
    }
    else if (now >= 17 && now < 18) {
        $("#input-8").addClass("present");
    }
    else if (now < 17) {
        $("#input-8").addClass("future");
    }

    // Taking the user data, putting to local storage and saving it to the hour in designated row

    // 9am

    let row9amInput = document.querySelector('#input-0');
    let row9amSaveBtn = document.querySelector('#hour0');
    
    // Displays any user input data already saved
    row9amInput.value = localStorage.getItem('stored0');

    // Save button clicks and stores the user input data
    hour0.addEventListener('click', updateOutput1);

    // Saves user input data to Local Storage
    function updateOutput1() {
        localStorage.setItem('stored0', row9amInput.value);
    };

    // 10am

    let row10amInput = document.querySelector('#input-1');
    let row10amSaveBtn = document.querySelector('#hour1');
    
    // Displays any user input data already saved
    row10amInput.value = localStorage.getItem('stored1');

    // Save button clicks and stores the user input data
    hour1.addEventListener('click', userDataStore1);

    // Saves user input data to Local Storage
    function userDataStore1() {
        localStorage.setItem('stored1', row10amInput.value);
    };

    // 11am

    let row11amInput = document.querySelector('#input-2');
    let row11amSaveBtn = document.querySelector('#hour2');
    
    // Displays any user input data already saved
    row10amInput.value = localStorage.getItem('stored2');

    // Save button clicks and stores the user input data
    hour2.addEventListener('click', userDataStore2);

    // Saves user input data to Local Storage
    function userDataStore2() {
        localStorage.setItem('stored2', row11amInput.value);
    };

    // 12pm

    let row12pmInput = document.querySelector('#input-3');
    let row12pmSaveBtn = document.querySelector('#hour3');
    
    // Displays any user input data already saved
    row12pmInput.value = localStorage.getItem('stored3');

    // Save button clicks and stores the user input data
    hour3.addEventListener('click', userDataStore3);

    // Saves user input data to Local Storage
    function userDataStore3() {
        localStorage.setItem('stored3', row12pmInput.value);
    };
    
    // 1pm

    let row1pmInput = document.querySelector('#input-4');
    let row1pmSaveBtn = document.querySelector('#hour4');
    
    // Displays any user input data already saved
    row1pmInput.value = localStorage.getItem('stored4');

    // Save button clicks and stores the user input data
    hour4.addEventListener('click', updateOutput4);

    // Saves user input data to Local Storage
    function updateOutput4() {
        localStorage.setItem('stored4', row1pmInput.value);
    };

    // 2pm

    let row2pmInput = document.querySelector('#input-5');
    let row2pmSaveBtn = document.querySelector('#hour5');
    
    // Displays any user input data already saved
    row2pmInput.value = localStorage.getItem('stored5');

    // Save button clicks and stores the user input data
    hour5.addEventListener('click', updateOutput5);

    // Saves user input data to Local Storage
    function updateOutput5() {
        localStorage.setItem('stored5', row2pmInput.value);
    };

    // 3pm

    let row3pmInput = document.querySelector('#input-6');
    let row3pmSaveBtn = document.querySelector('#hour6');
    
    // Displays any user input data already saved
    row3pmInput.value = localStorage.getItem('stored6');

    // Save button clicks and stores the user input data
    hour6.addEventListener('click', updateOutput6);

    // Saves user input data to Local Storage
    function updateOutput6() {
        localStorage.setItem('stored6', row3pmInput.value);
    };

    // 4pm

    let row4pmInput = document.querySelector('#input-7');
    let row4pmSaveBtn = document.querySelector('#hour7');
    
    // Displays any user input data already saved
    row4pmInput.value = localStorage.getItem('stored7');

    // Save button clicks and stores the user input data
    hour7.addEventListener('click', updateOutput7);

    // Saves user input data to Local Storage
    function updateOutput7() {
        localStorage.setItem('stored7', row4pmInput.value);
    };

    // 5pm

    let row5pmInput = document.querySelector('#input-8');
    let row5pmSaveBtn = document.querySelector('#hour8');
    
    // Displays any user input data already saved
    row5pmInput.value = localStorage.getItem('stored8');

    // Save button clicks and stores the user input data
    hour8.addEventListener('click', updateOutput8);

    // Saves user input data to Local Storage
    function updateOutput8() {
        localStorage.setItem('stored8', row5pmInput.value);
    };
})

// Former Save button function that worked for all hour rows, but it became to overwhelming to make the localstorage work properly from it

// save button click event takes the user input and saves it to local storage
    // $(".saveBtn").on("click", function (event) {
    //     event.preventDefault();
    //     let userInput = $(".note-input").val().trim();
    //     let storedItem = $(this).attr("id");
    //     localStorage.setItem(storedItem, JSON.stringify(userInput))

    //     console.log(localStorage.getItem(storedItem));
    //     console.log($(this).attr("id"));
    // });




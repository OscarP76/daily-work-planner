moment();
// Day, date, time
$("#currentDay").text(moment().format('LLLL'));

$(document).ready(function () {
    changeColor();
    toStorage();
});

function changeColor() {
    let currentTime = moment().hour();

    // past, present or future logic for time blocks
    $(".description").each(function () {
        let scheduledTime = parseInt($(this).attr("id"));

        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}
// Button functions. On click events for saving to and deleting from local storage
let eventText;
let eventTime;

$(".saveBtn").click(function () {
    eventText = $(this).siblings(".description").val();
    eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    changeColor();
    toStorage();
});

$(".deleteBtn").click(function () {
    eventText = $(this).siblings(".description").val("");
    eventText = $(this).siblings(".description").val();
    eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    changeColor();
    toStorage();

});

// Code for entering and saving text in the date blocks
function toStorage() {
    for (var key in localStorage) {
        $('.hour' + key + ' .description').val(localStorage.getItem(key));
    }

};
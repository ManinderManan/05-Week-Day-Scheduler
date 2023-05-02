// Evertying interacting with the DOM in a jQuery call will be wrapped in here

$(document).ready(function() {

   $(".saveBtn").on("click", saveActivity);
   function saveActivity() {
      console.log("saveActivity")
      let avtivity = $(this).siblings(".description").val();
      let hour  = $(this).parent().attr("id");

      localStorage.setItem(hour, avtivity);
   }

// Local Storage

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));

// Current Date and Time

let currentHour = dayjs().hour().min
console.log(currentHour)
let time=dayjs().formate('hh:mm:');
let now=dayjs().formate("MM/DD/YYYY");
console.log(now);
$("#currentHour").text(currentHour);
$("#currentDay").text(dayjs().format("MM/DD/YYYY"));
$('currentTime').text(dayjs().format('hh:mm'));
console.log(time)

function paintTheRow() {
   let currentHour = dayjs().hour();
   $(".time-block").each(function() {
      let timeDiv = $(this).attr('id').split("-")[1];

      console.log("currentHour", currentHour);
      console.log("timeDiv", timeDiv);
      if (currentHour === timeDiv) {
         $(this).removeClass("future")
         $(this).removeClass("past")
         $(this).addClass("present")
   } else if (currentHour < timeDiv) {
      $(this).removeClass("present")
      $(this).removeClass("past")
      $(this).addClass("future")
   }  else if (currentHour > timeDiv) {
      $(this).removeClass("present")
      $(this).removeClass("future")
      $(this).addClass("past")
   }
});
}

paintTheRow();
});
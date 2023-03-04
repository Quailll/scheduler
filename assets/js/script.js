// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtns = $(".saveBtn");
var containerTime = $('.time-block');
var notification = $('.notification');

$(document).ready(function () {
  for (var i = 0; i < saveBtns.length; i++) {
  saveBtns[i].addEventListener("click", function()
    {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
    });
  }


function hourUpdater() {
  var hour= dayjs().hour();

  for (var i =0; i < containerTime.length; i++) {
    var container = parseInt(containerTime[i].id.split("-")[1]);
      if (container === hour){
        $(containerTime[i]).addClass("present");
      } else if (container < hour) {
        $(containerTime[i]).removeClass("present");
        $(containerTime[i]).addClass("past");
      } else {
        $(containerTime[i]).removeClass("present");
        $(containerTime[i]).removeClass("past");
        $(containerTime[i]).addClass("future");
      }
    console.log()
  }
}
  hourUpdater();

setInterval( hourUpdater, 1000)

for (var i = 1; i <= 18; i++) {
  var key = "hour-" + i;
  $('#' + key + ' .description').val(localStorage.getItem(key))  
}


$("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY h:mm:ss:a"));
});

//   if ()
//   console.log(hour)
// }
// hourUpdater()
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
//break it up and just get the ID

  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


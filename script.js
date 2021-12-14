let date = document.getElementById("currentDay");
var now = moment().format("dddd, MMMM Do YYYY");
let hour = moment().hour();
console.log(hour);

$(date).text(now);

$('div[class="time-block"]').each(function (index, item) {
  if (parseInt($(item).data("index")) == hour) {
    $('div[class="time-block"]').addClass("present");
  } else if (parseInt($(item).data("index")) < hour) {
    $('div[class="time-block"]').addClass("past");
  } else {
    $('div[class="time-block"]').addClass("future");
  }
});

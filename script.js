let date = document.getElementById("currentDay");
var now = moment().format("dddd, MMMM Do YYYY");
let hour = moment().hour();
console.log(hour);

$(date).text(now);

$("textarea").each(function (index, item) {
  if (parseInt($(item).data("index")) == hour) {
    $("textarea").addClass("present");
  } else if (parseInt($(item).data("index")) < hour) {
    $("textarea").addClass("past");
  } else {
    $("textarea").addClass("future");
  }
});

$("#btn").click(function () {
  var textEl = $("#text").val();
  localStorage.setItem("text", textEl);
  alert(localStorage.getItem("text"));
});

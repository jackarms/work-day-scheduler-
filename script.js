let date = document.getElementById("currentDay");
var now = moment().format("dddd, MMMM Do YYYY");
let hour = moment().hour();
console.log(hour);

$(date).text(now);

var timeBlock;
var textEl;

$("textarea").each(function (index, item) {
  if (parseInt($(item).data("index")) == hour) {
    $("textarea").addClass("present");
  } else if (parseInt($(item).data("index")) < hour) {
    $("textarea").addClass("past");
  } else {
    $("textarea").addClass("future");
  }
});

$("button").click(function () {
  var timeBlock = $(this).siblings("div").text();
  var textEl = $(this).siblings("textarea").val();

  localStorage.setItem(timeBlock, textEl);
});

var loadDescription = function () {
  JSON.parse(window.localStorage.getItem("value"));
  console.log("value");
};

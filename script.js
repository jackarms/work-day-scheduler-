let date = document.getElementById("currentDay");
var now = moment().format("dddd, MMMM Do YYYY");

$(date).text(now);

//let now;
let past;
let future;

var nine = $("#nine");

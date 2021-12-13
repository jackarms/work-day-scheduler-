let date = document.getElementById("currentDay");

var newDate = new Date();
newDate.setDate(newDate.getDate() + 1);
$("#Date").html($.format.date(newDate, "ddd dd MMMM yyyy"));
console.log(newDate);
$(date).text(newDate);

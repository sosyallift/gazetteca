var today = new Date();
var options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

document.getElementById("date-bar").innerHTML = today.toLocaleDateString(
  "en-US",
  options
);
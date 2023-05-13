// Set the date and time for the countdown
var countDownDate = new Date("May 30, 2023 23:59:59").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining
  var timeRemaining = countDownDate - now;

  // Calculate hours, minutes, and seconds
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = hours + ":" + minutes + ":" + seconds;

  // If the countdown is over, reset it
  if (timeRemaining < 0) {
    clearInterval(x);
    var now = new Date().getTime();
    // document.getElementById("countdown").innerHTML = "00:00:00";
  }
}, 1000);
var timerRunning = false;
var timerInterval;

function startStopTimer() {
  var startStopButton = document.getElementById("startStopButton");
  var display = document.getElementById("safeTimerDisplay");

  if (timerRunning) {
    // Stop the timer
    clearInterval(timerInterval);
    timerRunning = false;
    startStopButton.textContent = "Start Timer";
  } else {
    // Start the timer
    var timeInSeconds = 90; // Change this to your desired initial time in seconds
    var minutes, seconds;

    timerInterval = setInterval(function () {
      minutes = parseInt(timeInSeconds / 60, 10);
      seconds = parseInt(timeInSeconds % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timeInSeconds < 0) {
        // Timer has reached 0, stop it
        clearInterval(timerInterval);
        timerRunning = false;
        startStopButton.textContent = "Start Timer";
      }
    }, 1000);

    timerRunning = true;
    startStopButton.textContent = "Stop Timer";
  }
}

// Add a click event listener to the Start/Stop button
document.getElementById("startStopButton").addEventListener("click", startStopTimer);

let timerInterval;
let stopwatchInterval;
let timerSeconds = 0;
let stopwatchSeconds = 0;

function startTimer() {
  timerInterval = setInterval(incrementTimer, 1000);
  document.getElementById('startTimer').disabled = true;
}

function pauseTimer() {
  clearInterval(timerInterval);
  document.getElementById('startTimer').disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  updateTimerDisplay();
  document.getElementById('startTimer').disabled = false;
}

function incrementTimer() {
  timerSeconds++;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = Math.floor(timerSeconds / 3600);
  const minutes = Math.floor((timerSeconds % 3600) / 60);
  const seconds = timerSeconds % 60;

  document.getElementById('timerDisplay').textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function startStopwatch() {
  stopwatchInterval = setInterval(incrementStopwatch, 1000);
  document.getElementById('startStopwatch').disabled = true;
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  document.getElementById('startStopwatch').disabled = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  updateStopwatchDisplay();
  document.getElementById('startStopwatch').disabled = false;
}

function incrementStopwatch() {
  stopwatchSeconds++;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const hours = Math.floor(stopwatchSeconds / 3600);
  const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
  const seconds = stopwatchSeconds % 60;

  document.getElementById('stopwatchDisplay').textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

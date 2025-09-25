// Grab the timer display
let timerDisplay = document.querySelector(".timerDisplay");

// Variables to track time
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Function to format time as MM:SS:MS
function formatTime(ms) {
    let milliseconds = Math.floor((ms % 1000) / 10); // 0–99
    let seconds = Math.floor((ms / 1000) % 60);      // 0–59
    let minutes = Math.floor((ms / (1000 * 60)) % 60); // 0–59

    return (
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds + ":" +
        (milliseconds < 10 ? "0" : "") + milliseconds
    );
}

// Start function
function startStopwatch() {
    if (!timerInterval) { // prevent multiple intervals
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            timerDisplay.textContent = formatTime(elapsedTime);
        }, 10); // update every 10ms
    }
}

// Stop function
function stopStopwatch() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Reset function
function resetStopwatch() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    timerDisplay.textContent = "00:00:00";
}

"use strict";

let result = document.getElementById("display");
let stopButton = document.getElementById("stop-btn");
let waitButton = document.getElementById("wait-btn");
let resetButton = document.getElementById("reset-btn");

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let i = 0;

function startTimer() {
    a = i;
    result.innerHTML = "Stopwatch: " + f + e + ":" + d + c + ":" + b + a;
    i++;
    if (i === 10) {
        a = 0;
        i = 0;
        b += i + 1;
    }
    if (b === 6) {
        b = 0;
        c += i + 1;
    }
    if (c === 10) {
        c = 0;
        d += i + 1;
    }
    if (d === 6) {
        d = 0;
        e += i + 1;
    }
    if (e === 10) {
        e = 0;
        f += i + 1;
    }
}

function stopTimer() {
    clearInterval(timeBegin);
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    i = 0;
    result.innerHTML = "Stopwatch: " + f + e + ":" + d + c + ":" + b + a;
}

let timeRun = false;
let timeBegin;
let timeStop;
let clickCount = 1;

result.innerHTML = "Stopwatch: " + f + e + ":" + d + c + ":" + b + a;

stopButton.addEventListener("click", () => {
    timeRun = !timeRun;
    if (timeRun) {
        timeBegin = setInterval(startTimer, 1000);
    }
    if (!timeRun) {
        stopTimer();
    }
});

waitButton.addEventListener("click", () => {
    if (clickCount === 1) {
        timeStop = setTimeout(() => {
            clickCount = 1;
        }, 300);
        clickCount = 2;
    } else if (clickCount === 2) {
        clearTimeout(timeStop);
        clearInterval(timeBegin);
        timeRun = false;
        clickCount = 1;
    }
});

resetButton.addEventListener("click", () => {
    stopTimer();
    timeBegin = setInterval(startTimer, 1000);
    timeRun = true;
})





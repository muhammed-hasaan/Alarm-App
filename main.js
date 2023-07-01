function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerText = timeString;
}

updateTime();
setInterval(updateTime, 1000);

document.getElementById("alarm-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var alarmTime = document.getElementById("alarm-time").value;

    var alarmDate = new Date();
    var alarmHours = parseInt(alarmTime.split(":")[0]);
    var alarmMinutes = parseInt(alarmTime.split(":")[1]);

    alarmDate.setHours(alarmHours);
    alarmDate.setMinutes(alarmMinutes);
    alarmDate.setSeconds(0);

    var currentTime = new Date();
    var timeDifference = alarmDate - currentTime;

    if (timeDifference > 0) {
        setTimeout(function () {
            var audio = new Audio('./sound.wav');
            audio.play();
        }, timeDifference);
    } else {
        alert("Invalid alarm time. Please set a future time.");
    }
});
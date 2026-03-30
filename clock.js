document.addEventListener("DOMContentLoaded", function() {
    function updateClock() {
        const now = new Date();
        let hours = now.getHours()
        const minutes = now.getMinutes().toString().padStart(2, "0");

        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours.toString().padStart(2, "0");

        const hoursElem = document.getElementById("clock-hours");
        const minutesElem = document.getElementById("clock-minutes");
        const ampmElem = document.getElementById("clock-ampm");

        if (hoursElem && minutesElem) {
            hoursElem.textContent = hours;
            minutesElem.textContent = minutes;
        }
        if (ampmElem) {
            ampmElem.textContent = ampm;
        }
    }
    updateClock();
    setInterval(updateClock, 1000);
});
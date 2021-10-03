
let hourText = document.getElementById('hour');
let minuteText = document.getElementById('minute');
let secondText = document.getElementById('second');
let dateText = document.getElementById('date');
let dayText = document.getElementById('day');
let date = null;
let day = '';
let hour = '';
let minute = '';
let second = '';
setInterval( () => {
    date = new Date();

    day = date.toString().substr(0, 2);

    hour = date.toString();
    hour = hour.split(' ')[4].substr(0, 2);

    minute = date.toString();
    minute = minute.split(' ')[4].substr(3, 2);

    second = date.toString();
    second = second.split(' ')[4].substr(6, 7);

    hourText.innerText = hour;
    dayText.innerText = day;
    minuteText.innerText = minute;
    secondText.innerText = second;
}, 100)


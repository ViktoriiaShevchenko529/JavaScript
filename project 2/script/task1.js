// let date = new Date('Jan 1 2021 00:00:00');
// let timer_show = document.getElementById("timer");
// function diffSubtract(date1, date2) {
//     return date2 - date1;
// }
// let end_date = {
//     "full_year": "2022", // Год
//     "month": "01", // Номер месяца
//     "day": "01", // День
//     "hours": "00", // Час
//     "minutes": "00", // Минуты
//     "seconds": "00" // Секунды
// }
// let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;

// timer = setInterval(function () {
//     let now = new Date();

//     let date = new Date(end_date_str);
//     let ms_left = diffSubtract(now, date);
//     if (ms_left <= 0) {
//         clearInterval(timer);
//         alert("Time is up");
//     } else {
    
//         let res = new Date(ms_left);
//         let str_timer = `${res.getUTCFullYear() - 1970}.${res.getUTCMonth()}.${res.getUTCDate() - 1} ${res.getUTCHours()}:${res.getUTCMinutes()}:${res.getUTCSeconds()}`;
//         timer_show.innerHTML = str_timer;
//     }
// }, 1000)

function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;
   
    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();
   
    if ( isNaN(dateEnd) ) {
      return;
    }
   
    timer = setInterval(calculate, 1000);
   
    function calculate() {
      var dateStart = new Date();
      var dateStart = new Date(dateStart.getUTCFullYear(),
                               dateStart.getUTCMonth(),
                               dateStart.getUTCDate(),
                               dateStart.getUTCHours(),
                               dateStart.getUTCMinutes(),
                               dateStart.getUTCSeconds());
      var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
   
      if ( timeRemaining >= 0 ) {
        days    = parseInt(timeRemaining / 86400);
        timeRemaining   = (timeRemaining % 86400);
        hours   = parseInt(timeRemaining / 3600);
        timeRemaining   = (timeRemaining % 3600);
        minutes = parseInt(timeRemaining / 60);
        timeRemaining   = (timeRemaining % 60);
        seconds = parseInt(timeRemaining);
   
        document.getElementById("days").innerHTML    = parseInt(days, 10);
        document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }
   
    function display(days, hours, minutes, seconds) {}
  }
   
   
   
  countdown('05/09/2022 00:00:00 AM');
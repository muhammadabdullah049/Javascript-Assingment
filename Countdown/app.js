

var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var dd = document.getElementById('dd');
var hh = document.getElementById('hh');
var mm = document.getElementById('mm');
var ss = document.getElementById('ss');

var day_dot = document.querySelector('day_dot');
var hr_dot = document.querySelector('hr_dot');
var min_dot = document.querySelector('min_dot');
var sec_dot = document.querySelector('sec_dot');

var endDate = '06/17/2024 00:00:00';
//Date format mm/dd/yyyy
var x = setInterval(function(){
    var now = new Date(endDate).getTime();
    var countDown = new Date().getTime();
    var distance = now - countDown;

    //Time calculation for days, hours, minutes, seconds
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance %  (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / (1000));

    //Output the result in element with id
    days.innerHTML = d + "<br><span>Days</span>";
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";

    //Animate stroke
    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    //365 Days in a year
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    //24 Hours in a day
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    //60 Minutes in a hour
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    //Animate circle dots
    day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
    //360 deg / 365days = 0.986
    hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
    //360deg / 24hours = 15
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    //360deg / 60minutes
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
    //360deg / 60seconds

    //if countdown is over, write some text
    if(distance < 0){
        clearInterval(x);
        document.getElementById("time").style.display = 'none';
        document.querySelector(".eidMubarak").style.display = 'block';
    }
})

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})
 

 // Counter Start 


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) +24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

// Counter Ends



// navbar  
var navli=document.querySelector('.navli');
var navtog=document.querySelector('.navtog');
console.log(navli);
console.log(navtog);
navli.addEventListener('mouseenter',function(e){
  e.preventDefault();
 e.currentTarget.classList.toggle('navtogg');
 // console.log(e.currentTarget);
 console.log("hello");
})
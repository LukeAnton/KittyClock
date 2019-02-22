var hourHand = document.getElementById('hourHand');
var minuteHand = document.getElementById('minuteHand');
var secondHand = document.getElementById('secondHand');

function initClock()  {
  var date = new Date();
  var hour = date.getHours() % 12; // 0 - 23
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var hourDeg = hour * 30;
  var minuteDeg = 6;
  var secondDeg = 6;

  hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
  minuteHand.style.transform = 'rotate(' + hourDeg + 'deg)';
  secondHand.style.transform = 'rotate(' + hourDeg + 'deg)';


  setTimeout(initClock, 1000);
};

initClock

const $hour = document.querySelector('.hours h1');

const $minute = document.querySelector('.minutes h1');

const $second = document.querySelector('.seconds h1');

const $body = document.querySelector('.center');

const $dark = document.querySelector('.mode span:first-child');

const $light = document.querySelector('.mode span:last-child');


$dark.addEventListener('click', function () {
    $body.classList.toggle("dark");
})

$light.addEventListener('click', function () {
    $body.classList.toggle("dark");
})
// const d = new Date();
// let hour = d.getHours();

// $hour.innerHTML = hour;

// let minutes = d.getMinutes();

// $minute.innerHTML = minutes;

// let seconds = d.getSeconds();

// $second.innerHTML = seconds


// $now = document.querySelector('.now time');

var updateNow = function () {
  // console.log('change d\'heure');

  const d = new Date();

  let hour = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  // var minsText = '';

  if (hour < 10) {
    var hourText = '0' + hour;
    
  }else {
    hourText = hour
  }

  if (minutes < 10) {
    var minutesText = '0' + minutes;
    
  }else {
    minutesText = minutes
  }

  if (seconds < 10) {
    var secondsText = '0' + seconds;
    
  }else {
    secondsText = seconds
  }



  $hour.innerHTML = hourText;
  $minute.innerHTML = minutesText;
  $second.innerHTML = secondsText;




};

updateNow();
setInterval(updateNow, 1000);
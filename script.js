document.addEventListener('DOMContentLoaded', (event) => {
  // const body = document.querySelector('body');
  const normalMode = document.querySelector('.normal')
  const hoursHand = document.querySelector('.hour');
  const minutesHand = document.querySelector('.minutes');
  const secondsHand = document.querySelector('.seconds');
  const switchMode = document.querySelector('.digital-time');
  const backToMode = document.querySelector('.normalMode-btn');
  const digitalTime = document.querySelector('.digital');
  // digital clock
  let Hours = document.querySelector('.hours')
  let minutes = document.querySelector('.minute')
  let seconds = document.querySelector('.second');
  let am = document.querySelector('.am')

  const updateTime = () => {
    let date = new Date();
    let secToDeg = (date.getSeconds() / 60) * 360;

    let minToDeg = (date.getMinutes() / 60) * 360;
    let hourToDeg = (date.getHours() / 12) * 360;


    if (secondsHand) secondsHand.style.transform = `rotate(${secToDeg}deg)`;
    if (minutesHand) minutesHand.style.transform = `rotate(${minToDeg}deg)`;
    if (hoursHand) hoursHand.style.transform = `rotate(${hourToDeg}deg)`;

  };

  updateTime();
  setInterval(updateTime, 1000);


  switchMode.addEventListener('click', () => {
    normalMode.classList.add('hide');
    digitalTime.classList.remove('hide');

  });
  backToMode.addEventListener('click', () => {
    normalMode.classList.remove('hide');
    digitalTime.classList.add('hide');

  })
  function digitalTimeFun() {

    let date = new Date()
    let Hrs = date.getHours();
    
    if (Hrs >= 13) {
      Hours.textContent = '0' + Hrs - 12;
      am.textContent = 'PM'
    } 
    else {
      Hours.textContent =  Hrs;
      am.textContent = "AM"
    }
       if (Hrs < 10) {
      Hours.textContent = '0' + Hrs;
    }
    if (Hrs == 12) {
      am.textContent = 'PM'

    }
    let mins = date.getMinutes();
    if (mins >= 0 && mins < 10) {
      minutes.textContent = '0' + mins;
    } else {
      minutes.textContent = mins;
    }
    let sec = date.getSeconds();
    if (sec >= 0 && sec < 10) {
      seconds.textContent = '0' + sec;
    }else{
      seconds.textContent = sec;
    }
  };
  digitalTimeFun();
  setInterval(digitalTimeFun, 1000);
});


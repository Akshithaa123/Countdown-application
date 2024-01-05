document.addEventListener('DOMContentLoaded', function() {
    const day = document.querySelector(".day .numb");
    const hour = document.querySelector(".hour .numb");
    const min = document.querySelector(".min .numb");
    const sec = document.querySelector(".sec .numb");
  
    var timer = setInterval(() => {
      var currentDate = new Date().getTime();
      var launchDate = new Date('January 31, 2024 13:00:00').getTime();
      var duration = launchDate - currentDate;
      
      var days = Math.floor(duration / (1000 * 60 * 60 * 24));
      var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((duration % (1000 * 60)) / 1000);
  
      day.innerHTML = days < 10 ? '0' + days : days;
      hour.innerHTML = hours < 10 ? '0' + hours : hours;
      min.innerHTML = minutes < 10 ? '0' + minutes : minutes;
      sec.innerHTML = seconds < 10 ? '0' + seconds : seconds;
  
      if (duration < 0) {
        clearInterval(timer);
      }
    }, 1000);
  });
  
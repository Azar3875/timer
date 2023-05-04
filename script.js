let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");
let x = null;
let countDownDate = null;

function startTimer() {
  let hours = parseInt(hoursInput.value);
  let minutes = parseInt(minutesInput.value);
  let seconds = parseInt(secondsInput.value);
  // محاسبه زمان شروع تایمر
  countDownDate = new Date().getTime() + (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
  x = setInterval(updateTimer, 1000);
}

function updateTimer() {
  // محاسبه زمان باقی‌مانده
  let now = new Date().getTime();
  let distance = countDownDate - now;

  // محاسبه ساعت، دقیقه و ثانیه
  let hours = Math.floor(distance / (1000 * 60 * 60));
  let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(distance % (1000 * 60) / 1000);

  // بررسی زمان
  if (distance < 0) {
    clearInterval(x);
    hours = 0; // تنظیم ساعت به 00
    minutes = 0; // تنظیم دقیقه به 00
    seconds = 0; // تنظیم ثانیه به 00
  }

  // نمایش زمان در صفحه
  document.getElementById("hours-display").innerHTML = hours.toString().padStart(2, "0");
  document.getElementById("minutes-display").innerHTML = minutes.toString().padStart(2, "0");
  document.getElementById("seconds-display").innerHTML = seconds.toString().padStart(2, "0");

  // بررسی پایان زمان و توقف تایمر
  if (distance < 0) {
    clearInterval(x);
    document.body.style.backgroundColor = "red";
  }
}
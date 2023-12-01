/* eslint-disable quotes */
/* eslint-disable semi */
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const date = document.getElementById("dt");
const day = document.getElementById("dy");
const month = document.getElementById("mth");
const year = document.getElementById("yyyy");
setInterval(() => {
  const clock = new Date();
  hrs.innerHTML = (clock.getHours() < 10 ? "0" : "") + clock.getHours();
  min.innerHTML = (clock.getMinutes() < 10 ? "0" : "") + clock.getMinutes();
  sec.innerHTML = (clock.getSeconds() < 10 ? "0" : "") + clock.getSeconds();
  date.innerHTML = clock.getDate();
  day.innerHTML = clock.getDay();
  month.innerHTML = clock.getMonth() + 1;
  year.innerHTML = clock.getFullYear();
}, 1000);

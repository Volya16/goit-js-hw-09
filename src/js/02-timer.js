// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMins = document.querySelector('[data-minutes]');
const timerSec = document.querySelector('[data-seconds]');

startBtn.disabled = true;


import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMins = document.querySelector('[data-minutes]');
const timerSec = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

startBtn.addEventListener('click', onStart);

function onStart() {
  startBtn.disabled = true;
  inputEl.disabled = true;

  const timerId = setInterval(() => {
    const currentDate = Date.new();
    const selectDate = new Date(input.value);
    const difference = selectDate - currentDate;

    if (difference < 1000) {
      clearInterval(timerId);
    }
  });
}

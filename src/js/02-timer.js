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
  // Включает выбор времени
  time_24hr: true,
  //   24-часовой режим
  defaultDate: new Date(),
  //   Устанавливает начальную выбранную дату
  minuteIncrement: 1,
  //   Регулирует шаг ввода минут
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

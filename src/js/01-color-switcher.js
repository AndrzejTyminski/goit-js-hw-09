const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop');
const bodyEl = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  console.log(
    `Interval with id ${timerId} has stopped! with color ${getRandomHexColor()}`
  );
  startBtn.disabled = false;
});

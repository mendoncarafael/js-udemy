function crono() {
  let seconds = 0;
  let intervalID;
  let display = document.getElementById('res');

  function timerZone(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT',
    });
  }

  function startTimer() {
    intervalID = setInterval(() => {
      seconds++;
      display.innerHTML = timerZone(seconds);
    }, 1000);
  }

  document.addEventListener('click', (event) => {
    const el = event.target;
    if (el.classList.contains('start')) {
      startTimer();
      display.style.color = 'black';
    } else if (el.classList.contains('pause')) {
      clearInterval(intervalID);
      display.style.color = 'red';
    } else if (el.classList.contains('reset')) {
      clearInterval(intervalID);
      seconds = 0;
      display.innerHTML = '00:00:00';
      display.style.color = 'black';
    }
  });
}
crono();

//Create a stopwatch object that has four properties and three methods

let stopwatch = {};

stopwatch.color = 'black';
stopwatch.buttons = ['start', 'stop', 'pause', 'reset'];
stopwatch.type = 'phone';
stopwatch.brand = 'Seiko';
stopwatch.mode = 'stop';
stopwatch.time = '00:00:00'

stopwatch.start = () => {
  stopwatch.mode = 'start';
  alert("The stopwatch is starting!")
}

stopwatch.stop = () => {
  stopwatch.mode = 'stop';
  alert("The stopwatch has stopped.")
}

stopwatch.pause = () => {
  stopwatch.mode = 'pause';
  alert("The stopwatch is paused.")
}

stopwatch.reset = () => {
  stopwatch.mode = 'reset';
  alert("The stopwatch has been reset.")
}

stopwatch.getTime = () => {
  return stopwatch.time;
}

stopwatch.setMode = (e) => {
  let mode = e.target.attributes[1].value;
  stopwatch.mode = mode;
  switch (mode) {
    case 'start':
      stopwatch.start();
      break;
    case 'stop':
      stopwatch.stop();
      break;
    case 'pause':
      stopwatch.pause();
      break;
    case 'reset':
      stopwatch.reset();
      break;
  }
}

let stopwatchBtns = document.querySelectorAll('button');
stopwatchBtns.forEach((btn) => {
  btn.addEventListener('click', stopwatch.setMode);
})
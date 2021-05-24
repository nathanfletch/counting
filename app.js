function startCount() {
  current = 0;
  clearInterval(interval);
  countBy = parseInt(this.value);
  if(countBy <= 10)
    interval = setInterval(displayNumber, 1500);
  else
    interval = setInterval(displayNumber, 2000);

}
function stopCount() {
  current = 0;
  clearInterval(interval);
  display.innerText = 0;
}
function backspaceStop(e) {
  if(e.code !== "Backspace") return;
  stopCount();
}
function displayNumber() {
  current = current + countBy;
  if(typeof current === "number")
    display.innerText = current;
}

let interval;
let countBy = 1;
let current = 0;
const input = document.querySelector("#count-input");
const display = document.querySelector(".display");
input.addEventListener('change', startCount);
input.addEventListener('click', stopCount);
input.addEventListener('keydown', backspaceStop);

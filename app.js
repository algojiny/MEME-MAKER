const canvas = document.querySelector("canvas");
const color = document.getElementById("color");
const colorOption = Array.from(document.getElementsByClassName("color-option"));
const lineWidth = document.getElementById("line-width");
const showLineWidth = document.getElementById("show-line-width");
const showColorCode = document.getElementById("show-color");
const ctx = canvas.getContext("2d"); //그림을 그릴때 붓처럼 사용하는것 context
canvas.width = 400;
canvas.height = 400;
ctx.lineWidth = lineWidth.value;
showLineWidth.innerText = lineWidth.value + "px";
showColorCode.innerText = color.value;
let isPainting = false;

// const colors = ["#ff3838", "#ffb8b8", "#c56cf8", "#ff9f1a", "#fff200", "#32ff7e", "#7efff5", "#18dcff", "#7d5fff"];
// const color = colors[Math.floor(Math.random() * colors.length)];
// ctx.strokeStyle = color;
// ctx.lineTo(event.offsetX, event.offsetY);
// ctx.stroke();

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
  showLineWidth.innerText = event.target.value + "px";
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
  showColorCode.innerText = event.target.value;
}
function onColorClick(event) {
  ctx.strokeStyle = event.target.dataset.color;
  ctx.fillStyle = event.target.dataset.color;
  color.value = event.target.dataset.color;
  showColorCode.innerText = event.target.dataset.color;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting); //마우스가 캔버스를 벗어나면 그리기모드 취소

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOption.forEach((color) => color.addEventListener("click", onColorClick));

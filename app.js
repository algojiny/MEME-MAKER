const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //그림을 그릴때 붓처럼 사용하는것 context
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

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
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting(event) {
  isPainting = true;
}
function cancelPainting(event) {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting); //마우스가 캔버스를 벗어나면 그리기모드 취소

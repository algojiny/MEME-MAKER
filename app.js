const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //그림을 그릴때 붓처럼 사용하는것 context
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.fill();

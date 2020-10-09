const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

context.beginPath();
context.rect(100, 100, 300, 300);
context.lineWidth = 10;
context.fillStyle = "blue";
context.fill();
context.stroke();

context.beginPath();
context.arc(250, 250, 100, -Math.PI / 4, (3 * Math.PI) / 2);
context.lineWidth = 5;
context.fillStyle = "yellow";
context.strokeStyle = "red";
context.fill();
context.stroke();

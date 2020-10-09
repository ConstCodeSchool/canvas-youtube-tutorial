const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

context.beginPath();
context.moveTo(188, 130);
context.bezierCurveTo(140, 10, 388, 10, 250, 250);
context.lineWidth = 10;
context.stroke();

// context.beginPath();
// context.moveTo(0, 500);
// context.quadraticCurveTo(250, 0, 500, 500);
// context.fillStyle = "green";
// context.fill();
// context.lineWidth = 3;
// context.stroke();

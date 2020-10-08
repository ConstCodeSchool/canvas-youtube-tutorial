const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(300, 400);
// context.stroke();

// context.beginPath();
// context.moveTo(300, 400);
// context.lineTo(500, 0);
// context.stroke();

context.beginPath();
context.moveTo(100, 100);
context.lineTo(300, 400);
context.lineTo(450, 200);

context.strokeStyle = "blue";
context.lineWidth = 10;
context.lineCap = "round";
context.lineJoin = "bevel";

context.stroke();

// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(300, 400);
// context.strokeStyle = "blue";
// context.lineWidth = 10;
// context.stroke();

// context.beginPath();
// context.moveTo(300, 400);
// context.lineTo(500, 0);
// context.strokeStyle = "red";
// context.lineWidth = 2;
// context.stroke();

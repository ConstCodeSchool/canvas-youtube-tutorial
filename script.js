const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

// context.beginPath();
// context.moveTo(100, 20);

// // line 1
// context.lineTo(200, 160);

// // quadratic curve
// context.quadraticCurveTo(230, 200, 250, 120);

// // bezier curve
// context.bezierCurveTo(290, -40, 300, 200, 400, 150);

// // line 2
// context.lineTo(500, 90);
// context.lineJoin = "round";
// context.closePath();

// context.lineWidth = 5;
// context.fillStyle = "blue";
// context.fill();

// context.beginPath();
// context.moveTo(300, 400);
// context.lineTo(250, 250);
// context.lineTo(320, 100);
// context.lineTo(300, 400);
// context.closePath();
// // context.fillStyle = "green";
// // context.fill();
// context.stroke();

drawRectWithRadius(20, 20, 400, 250, 35);

context.strokeStyle = "blue";
context.lineWidth = 10;
context.fillStyle = "yellow";
context.fill();
context.stroke();

function drawRectWithRadius(x, y, width, height, r) {
	context.beginPath();
	context.moveTo(x + r, y);
	context.lineTo(x + width - r, y);
	context.arc(x + width - r, y + r, r, -Math.PI / 2, 0);
	context.lineTo(x + width, y + height - r);
	context.arc(x + width - r, y + height - r, r, 0, Math.PI / 2);
	context.lineTo(x + r, y + height);
	context.arc(x + r, y + height - r, r, Math.PI / 2, Math.PI);
	context.lineTo(x, y + r);
	context.arc(x + r, y + r, r, Math.PI, (Math.PI * 3) / 2);
	context.closePath();
}

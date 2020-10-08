const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

function resize() {
	canvas.width = 500;
	canvas.height = 500;
}

function clearCanvas(canvas) {
	canvas.width = canvas.width;
}

context.beginPath();
context.moveTo(0, 0);
context.lineTo(500, 500);
context.stroke();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 1600;
canvas.height = 600;

// context.font = "75px mono";
// context.textAlign = "center";
// context.textBaseline = "middle";

// context.fillStyle = "green";
// context.fillText("Привет", 300, 300);

// context.strokeStyle = "red";
// context.lineWidth = 2;
// context.strokeText("Привет", 300, 300);

// drawPoint(300, 300);

// // const measure = context.measureText("Привет");
// // console.log(measure);

// function drawPoint(x, y) {
// 	context.beginPath();
// 	context.arc(x, y, 5, 0, Math.PI * 2);
// 	context.fill();
// }

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const variants = [
	"top",
	"hanging",
	"middle",
	"alphabetic",
	"ideographic",
	"bottom",
];

context.font = "50px mono";
const middle = canvas.height / 2;

context.beginPath();
context.moveTo(0, middle);
context.lineTo(canvas.width, middle);
context.strokeStyle = "red";
context.stroke();

let offsetX = 0;
for (let i = 0; i < variants.length; i++) {
	const variant = variants[i];

	context.textBaseline = variant;
	context.fillText(capitalize(variant), offsetX, middle);

	offsetX += context.measureText(capitalize(variant)).width + 50;
}

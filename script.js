const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const degreesToRadians = (n) => (n / 180) * Math.PI;
const radiansToDegress = (n) => (n / Math.PI) * 180;

canvas.width = 500;
canvas.height = 500;

// context.beginPath();
// context.arc(250, 250, 100, 0, Math.PI * 2);
// context.lineWidth = 10;
// context.strokeStyle = "blue";
// context.fillStyle = "red";
// context.fill();
// context.stroke();

// context.beginPath();
// context.arc(250, 250, 100, 0, (5 * Math.PI) / 4);
// context.lineWidth = 10;
// context.strokeStyle = "blue";
// context.fillStyle = "red";
// context.fill();
// context.stroke();

// context.beginPath();
// context.arc(250, 250, 75, degreesToRadians(-45), degreesToRadians(45));
// context.stroke();

// context.beginPath();
// context.arc(250, 250, 75, Math.PI / 4, -Math.PI / 4, true);
// context.stroke();

// context.beginPath();
// context.arc(250, 250, 75, -Math.PI / 4, Math.PI / 4);
// context.stroke();

// context.beginPath();
// context.arc(250, 250, 75, Math.PI / 4, (5 * Math.PI) / 4);
// context.stroke();

// const colors = ["red", "green", "blue"];

// context.lineWidth = 5;
// context.lineJoin = "round";

// for (let i = 0; i < colors.length; i++) {
// 	const color = colors[i];

// 	context.beginPath();
// 	context.rect(100 + i * 50, 100 + i * 35, 300, 100);
// 	context.fillStyle = color;
// 	context.fill();
// 	context.stroke();
// }

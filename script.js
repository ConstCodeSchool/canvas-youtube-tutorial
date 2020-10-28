const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let miterLimit = 100;
const TIME_SCALE = 0.0001;

animation({
	clear() {
		canvas.width |= 0;
	},

	update({ timestamp }) {
		miterLimit = 100 - 100 * Math.cos(timestamp * TIME_SCALE);
	},

	render() {
		context.beginPath();
		context.moveTo(0, canvas.height / 2);

		for (let i = 1; i <= 100; i++) {
			const y = canvas.height / 2 + 100 * (-1) ** i;
			context.lineTo(i ** 2, y);
		}

		context.lineWidth = 5;
		context.miterLimit = miterLimit;
		context.stroke();

		context.beginPath();
		context.moveTo(0, canvas.height / 2 - 75);
		context.lineTo(canvas.width, canvas.height / 2 - 75);
		context.strokeStyle = "blue";
		context.lineWidth = 1;
		context.stroke();

		context.beginPath();
		context.moveTo(0, canvas.height / 2 + 75);
		context.lineTo(canvas.width, canvas.height / 2 + 75);
		context.strokeStyle = "blue";
		context.lineWidth = 1;
		context.stroke();

		context.font = "50px serif";
		context.textBaseline = "top";
		context.textAlign = "right";
		context.fillText(String(miterLimit).substring(0, 5), canvas.width, 0);
	},
});

// const TIME_SCALE = 100;
// let lineDashOffset = 0;

// const dash = [100, 1100];

// animation({
// 	clear() {
// 		canvas.width |= 0;
// 	},

// 	update({ secondPart }) {
// 		lineDashOffset += secondPart * TIME_SCALE;
// 	},

// 	render() {
// 		context.beginPath();
// 		context.setLineDash(dash);
// 		context.lineDashOffset = lineDashOffset;
// 		context.lineWidth = 5;
// 		context.rect(100, 100, 300, 300);
// 		context.stroke();
// 	},
// });

// function drawLine(y) {
// 	context.beginPath();
// 	context.moveTo(0, y);
// 	context.lineTo(500, y);
// 	context.stroke();
// }

// const TIME_SCALE = 0.001;

// let shadowBlur = 0;
// let shadowOffsetX = 0;
// let shadowOffsetY = 0;

// animation({
// 	clear() {
// 		canvas.width |= 0;
// 	},

// 	update({ timestamp }) {
// 		shadowBlur = 10 + 10 * Math.cos(timestamp * TIME_SCALE);
// 		shadowOffsetX = 30 * Math.cos(timestamp * TIME_SCALE);
// 		shadowOffsetY = 30 * Math.sin(timestamp * TIME_SCALE);
// 	},

// 	render() {
// 		context.beginPath();
// 		context.moveTo(100, 100);
// 		context.lineTo(200, 200);
// 		context.lineTo(300, 100);
// 		context.shadowColor = "red";
// 		context.shadowBlur = shadowBlur;
// 		context.shadowOffsetX = shadowOffsetX;
// 		context.shadowOffsetY = shadowOffsetY;
// 		context.strokeStyle = "blue";
// 		context.stroke();
// 	},
// });

// animation({
// 	clear() {
// 		canvas.width |= 0;
// 	},

// 	update({ timestamp }) {
// 		shadowBlur = 10 + 10 * Math.cos(timestamp * TIME_SCALE);
// 		shadowOffsetX = 30 * Math.cos(timestamp * TIME_SCALE);
// 		shadowOffsetY = 30 * Math.sin(timestamp * TIME_SCALE);
// 	},

// 	render() {
// 		context.beginPath();
// 		context.rect(100, 100, 250, 250);
// 		context.shadowColor = "red";
// 		context.shadowBlur = shadowBlur;
// 		context.shadowOffsetX = shadowOffsetX;
// 		context.shadowOffsetY = shadowOffsetY;
// 		context.strokeStyle = "blue";
// 		context.stroke();
// 	},
// });

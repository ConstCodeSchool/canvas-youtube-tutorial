const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const x = canvas.width / 2;
const y = canvas.height / 2;

const R = 200;
const r = 100;

let angle = 0;
const ANGLE_SPEED = Math.PI * 0.1;

let lineDashOffset = 0;

animation({
	clear() {
		canvas.width |= 0;
	},

	update({ timestamp, secondPart }) {
		angle = Math.PI * 0.25 * Math.cos(timestamp * 0.001);
		lineDashOffset -= secondPart * 10;
	},
	render() {
		const dAngle = Math.PI / 5;

		context.beginPath();
		context.moveTo(x + R * Math.cos(angle), y + R * Math.sin(angle));

		for (let i = 1; i < 10; i++) {
			const radius = i % 2 ? r : R;
			context.lineTo(
				x + radius * Math.cos(angle + dAngle * i),
				y + radius * Math.sin(angle + dAngle * i)
			);
		}

		context.closePath();
		context.lineWidth = 3;
		context.lineDashOffset = lineDashOffset;
		context.setLineDash([10, 10]);
		context.stroke();

		context.beginPath();
		context.arc(x, y, R + 2, 0, Math.PI * 2);
		context.lineWidth = 2;
		context.strokeStyle = "blue";
		context.setLineDash([100, 100]);
		context.stroke();
	},
});

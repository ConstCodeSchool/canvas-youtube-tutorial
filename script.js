const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const triangle = {
	centerX: canvas.width / 2,
	centerY: canvas.height / 2,
	radius: 200,
	angle: 0,
	angleSpeed: Math.PI * 0.5,
};

animation({
	update({ secondPart }) {
		triangle.angle += triangle.angleSpeed * secondPart;
	},

	clear() {
		context.beginPath();
		context.rect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "gray";
		context.fill();
	},

	render() {
		const dAngle = (Math.PI / 3) * 4;

		context.beginPath();
		context.moveTo(
			triangle.centerX + triangle.radius * Math.cos(triangle.angle),
			triangle.centerY + triangle.radius * Math.sin(triangle.angle)
		);
		context.lineTo(
			triangle.centerX + triangle.radius * Math.cos(triangle.angle + dAngle),
			triangle.centerY + triangle.radius * Math.sin(triangle.angle + dAngle)
		);
		context.lineTo(
			triangle.centerX +
				triangle.radius * Math.cos(triangle.angle + 2 * dAngle),
			triangle.centerY + triangle.radius * Math.sin(triangle.angle + 2 * dAngle)
		);
		context.closePath();
		context.fillStyle = "red";
		context.fill();
	},
});

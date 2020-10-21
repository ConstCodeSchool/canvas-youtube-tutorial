const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const stars = [];
for (let x = 0; x < 2; x++) {
	for (let y = 0; y < 2; y++) {
		stars.push({
			centerX: (canvas.width / 4) * (2 * x + 1),
			centerY: (canvas.height / 4) * (2 * y + 1),
			n: stars.length + 5,
			color: ["red", "green", "blue", "black"][stars.length],
			smallRadius: 25,
			bigRadius: 50,
			angle: 0,
			angleSpeed: Math.PI * (x + y + 1) * 0.35 * (-1) ** y,
		});
	}
}

animation({
	update({ secondPart }) {
		for (const star of stars) {
			star.angle += star.angleSpeed * secondPart;
		}
	},

	clear() {
		canvas.width |= 0;
	},

	render() {
		for (const star of stars) {
			const dAngle = Math.PI / star.n;

			context.beginPath();
			context.moveTo(
				star.centerX + star.bigRadius * Math.cos(star.angle),
				star.centerY + star.bigRadius * Math.sin(star.angle)
			);

			for (let i = 1; i < star.n * 2; i++) {
				const r = i % 2 ? star.smallRadius : star.bigRadius;

				context.lineTo(
					star.centerX + r * Math.cos(star.angle + dAngle * i),
					star.centerY + r * Math.sin(star.angle + dAngle * i)
				);
			}
			context.fillStyle = star.color;
			context.fill();
		}
	},
});

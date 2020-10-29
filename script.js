const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const mouse = createMouse(canvas);

const colors = ["red", "blue", "green", "red"];
let color = "red";
let r = 5;

animation({
	clear() {
		// context.beginPath();
		// context.rect(0, 0, canvas.width, canvas.height);
		// context.fillStyle = "gray";
		// context.fill();
	},

	update() {
		if (mouse.left && !mouse.pLeft) {
			const index = colors.indexOf(color);
			color = colors[index + 1];
		}

		if (mouse.middle && !mouse.pMiddle) {
			r += 3;
		}

		mouse.tick();
	},

	render() {
		context.beginPath();
		context.arc(mouse.x, mouse.y, r, 0, Math.PI * 2);
		context.fillStyle = color;
		context.fill();
	},
});

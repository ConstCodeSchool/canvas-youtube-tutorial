const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

main();

async function main() {
	const image = await loadImage(
		"https://mdn.mozillademos.org/files/222/Canvas_createpattern.png"
	);

	const patter = context.createPattern(image, "no-repeat");

	context.fillStyle = patter;
	context.fillRect(0, 0, 500, 500);
}

function loadImage(src) {
	return new Promise((resolve) => {
		const image = new Image();
		image.src = src;
		image.onload = () => resolve(image);
	});
}

// const gradient = context.createRadialGradient(300, 200, 50, 250, 250, 200);
// gradient.addColorStop(0, "red");
// gradient.addColorStop(0.5, "white");
// gradient.addColorStop(1, "green");

// context.fillStyle = gradient;
// context.fillRect(0, 0, 500, 500);

// const gradient = context.createLinearGradient(0, 0, 500, 500);

// gradient.addColorStop(0, "red");
// gradient.addColorStop(0.9, "white");
// gradient.addColorStop(1, "green");

// context.fillStyle = gradient;
// context.fillRect(0, 0, 500, 500);

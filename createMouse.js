function createMouse(element) {
	const mouse = {
		x: 0,
		y: 0,
		left: false,
		pLeft: false,
		right: false,
		pRight: false,
		middle: false,
		pMiddle: false,
		over: false,
	};

	mouse.tick = mouseTick;

	function mouseTick() {
		mouse.pLeft = mouse.left;
		mouse.pRight = mouse.right;
		mouse.pMiddle = mouse.middle;
	}

	element.addEventListener("mouseenter", mouseenterHandler);
	element.addEventListener("mousemove", mousemoveHandler);
	element.addEventListener("mouseleave", mouseleaveHandler);
	element.addEventListener("mousedown", mousedownHandler);
	element.addEventListener("mouseup", mouseupHandler);

	function mouseenterHandler(event) {
		mouse.over = true;
	}

	function mousemoveHandler(event) {
		const rect = element.getBoundingClientRect();
		mouse.x = event.clientX - rect.left;
		mouse.y = event.clientY - rect.top;
	}

	function mouseleaveHandler(event) {
		mouse.over = false;
	}

	function mousedownHandler(event) {
		if (event.buttons === 1) {
			mouse.left = true;
		} else if (event.buttons === 4) {
			mouse.middle = true;
		} else if (event.buttons === 2) {
			mouse.right = true;
		}
	}

	function mouseupHandler(event) {
		if (event.button === 0) {
			mouse.left = false;
		} else if (event.button === 1) {
			mouse.middle = false;
		} else if (event.button === 2) {
			mouse.right = false;
		}
	}

	return mouse;
}

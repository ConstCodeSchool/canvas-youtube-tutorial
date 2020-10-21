function animation(params) {
	const { update, render, clear } = params;
	let pTimestamp = 0;

	requestAnimationFrame(tick);

	function tick(timestamp) {
		requestAnimationFrame(tick);

		const diff = timestamp - pTimestamp;
		const fps = 1000 / diff;
		const secondPart = diff / 1000;
		pTimestamp = timestamp;

		const params = {
			diff,
			timestamp,
			pTimestamp,
			fps,
			secondPart,
		};

		update(params);
		clear();
		render(params);
	}
}

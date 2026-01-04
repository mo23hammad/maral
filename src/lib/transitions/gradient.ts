
export function paint(context: CanvasRenderingContext2D, t: number): void {
	const { width, height } = context.canvas;

	// getImageData expects integer sizes
	const w = Math.floor(width);
	const h = Math.floor(height);

	const imageData: ImageData = context.getImageData(0, 0, w, h);

	for (let p = 0; p < imageData.data.length; p += 4) {
		const i = p / 4;
		const x = i % w;

		// normalized x (0..1)
		const nx = x / w;

		// speed controls how fast it moves (bigger = faster)
		const speed = 0.0009;

		// cycles controls how many black/white bands across the width
		const cycles = 2;

		// value in [0..255], smooth oscillation
		const v = 80 + 107 * Math.sin(nx * cycles * Math.PI * 2 + t * speed);

		// Clamp and convert to int (safer)
		const c = Math.max(0, Math.min(255, Math.round(v)));

		imageData.data[p + 0] = c; // R
		imageData.data[p + 1] = c; // G
		imageData.data[p + 2] = c; // B
		imageData.data[p + 3] = 255; // A
	}

	context.putImageData(imageData, 0, 0);
}


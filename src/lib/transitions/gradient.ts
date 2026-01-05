

export function paint(context: CanvasRenderingContext2D, t: number): void {
	const { width, height } = context.canvas;

	const w = Math.floor(width);
	const h = Math.floor(height);

	const imageData: ImageData = context.getImageData(0, 0, w, h);

	// Brand blue (Tailwind blue-500): #3B82F6
	const blue = { r: 0x3b, g: 0x82, b: 0xf6 };
	const black = { r: 0, g: 0, b: 0 };

	// helpers
	const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

	for (let p = 0; p < imageData.data.length; p += 4) {
		const i = p / 4;
		const x = i % w;
		// const y = (i / w) >>> 0;

		const nx = x / w;

		const speed = 0.0009;
		const cycles = 2;

		// Wave in [-1..1]
		const wave = Math.sin(nx * cycles * Math.PI * 2 + t * speed);

		// Convert to mix factor [0..1]
        const mix = Math.pow((wave + 1) / 2, 1.6); // 1.2–2.5

		// Blend black -> blue
		const r = Math.round(lerp(black.r, blue.r, mix));
		const g = Math.round(lerp(black.g, blue.g, mix));
		const b = Math.round(lerp(black.b, blue.b, mix));

		imageData.data[p + 0] = r;
		imageData.data[p + 1] = g;
		imageData.data[p + 2] = b;
		imageData.data[p + 3] = 255;
	}

	context.putImageData(imageData, 0, 0);
}


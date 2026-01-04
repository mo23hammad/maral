<script>
	import { paint } from '$lib/transitions/gradient.ts';
    import Card from '$lib/components/Card.svelte';
	import Section from '$lib/components/Section.svelte';

	let canvas;

	$effect(() => {
		const context = canvas.getContext('2d');

		let frame = requestAnimationFrame(function loop(t) {
			frame = requestAnimationFrame(loop);
			paint(context, t);
		});

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>



<h1 class="font-display fixed top-7/15 left-1/3 font-bold text-[63px] sr-only">
    Future of website developing
</h1>

<canvas bind:this={canvas} class="relative top-7/16 left-1/10 w-81/100 h-1/10 "></canvas>

<Section />
<Section />
<Section />
<Section />

<style>
  canvas {
    mask: url(/text64362.svg) 50% 50% no-repeat;
    -webkit-mask: url(/text64362.svg) 50% 50% no-repeat;

    /* phone default */
    mask-size: 70vmin;
    -webkit-mask-size: 70vmin;
  }

  /* desktop and up */
  @media (min-width: 768px) {
    canvas {
      mask-size: 130vmin;
      -webkit-mask-size: 130vmin;
    }
  }
</style>

<!-- <button -->
<!--   class="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold tracking-[-0.01em] antialiased transition active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50" -->
<!-- > -->
<!--   Button -->
<!-- </button> -->
<!---->
<!-- <button -->
<!--   class="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B0D10] px-5 py-3 text-[14px] font-semibold tracking-[-0.01em] text-white antialiased transition -->
<!--          hover:-translate-y-[1px] hover:shadow-sm -->
<!--          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25 -->
<!--          active:translate-y-0 active:scale-[0.98]" -->
<!-- > -->
<!--   Book a call -->
<!-- </button> -->
<!---->
<!-- <button -->
<!--   class="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-5 py-3 text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10] antialiased transition -->
<!--          hover:-translate-y-[1px] hover:border-black/25 hover:bg-[#F7F7F7] -->
<!--          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25 -->
<!--          active:translate-y-0 active:scale-[0.98]" -->
<!-- > -->
<!--   See services -->
<!-- </button> -->
<!---->
<!-- <button -->
<!--   class="inline-flex items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-5 py-3 text-[14px] font-semibold tracking-[-0.01em] text-white antialiased transition -->
<!--          hover:-translate-y-[1px] hover:brightness-95 hover:shadow-sm -->
<!--          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/30 -->
<!--          active:translate-y-0 active:scale-[0.98]" -->
<!-- > -->
<!--   Get a quote -->
<!-- </button> -->
<!---->
<!-- <button -->
<!--   class="inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10] antialiased transition -->
<!--          hover:bg-black/5 -->
<!--          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25 -->
<!--          active:scale-[0.98]" -->
<!-- > -->
<!--   Learn more → -->
<!-- </button> -->
<!---->
<!-- <button -->
<!--   class="inline-flex items-center gap-2 text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10] antialiased transition -->
<!--          hover:text-[#3B82F6] -->
<!--          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25" -->
<!-- > -->
<!--   View details <span aria-hidden="true">→</span> -->
<!-- </button> -->

<!-- <button -->
<!--   class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-[#0B0D10] transition -->
<!--          hover:-translate-y-[1px] hover:border-black/25 hover:bg-[#F7F7F7] -->
<!--          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25 -->
<!--          active:translate-y-0 active:scale-[0.98]" -->
<!--   aria-label="Open menu" -->
<!-- > -->
<!--   ☰ -->
<!-- </button> -->

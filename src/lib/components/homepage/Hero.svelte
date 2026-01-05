<script>
    import {paint} from "$lib/transitions/gradient.ts";

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
<style>
  
    
    canvas {
      -webkit-mask: url(/text64362.svg) left center / contain no-repeat;
      mask: url(/text64362.svg) left center / contain no-repeat;
    }



</style>
<section class="bg-[#F7F7F7] py-16 md:py-24">
  <div class="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
    <!-- LEFT -->
    <div class="max-w-xl">
      <!-- Kicker -->
      
        <div class="hidden lg:inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em]">
          <span class="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
          <canvas bind:this={canvas} class="h-5 w-50"></canvas>
        </div>
      <!-- H1 -->
      <h1 class="mt-4 font-['Space_Grotesk'] text-[40px] leading-[1.08] font-semibold tracking-[-0.02em] text-[#0B0D10] md:text-[64px]">
        Dashboards & web systems built with
        <span class="bg-gradient-to-r from-[#0B0D10] via-[#111418] to-[#3B82F6] bg-clip-text text-transparent">
          precision
        </span>.
      </h1>

      <!-- Subtitle -->
      <p class="mt-5 text-[16px] leading-[1.75] tracking-[-0.01em] text-[#0B0D10]/75 md:text-[17px]">
        From internal dashboards to public websites — we design and develop clean, high-performance products with
        SvelteKit, TypeScript, and reliable backends.
      </p>

      <!-- CTAs -->
      <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href="/contact"
          class="inline-flex items-center justify-center rounded-full bg-[#3B82F6] px-5 py-3 text-[14px] font-semibold tracking-[-0.01em] text-white transition
                 hover:-translate-y-[1px] hover:brightness-95 hover:shadow-[0_10px_30px_rgba(59,130,246,0.20)]
                 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/30 active:translate-y-0 active:scale-[0.98]"
        >
          Get a quote
        </a>

        <a
          href="/services"
          class="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-5 py-3 text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10] transition
                 hover:-translate-y-[1px] hover:border-black/25 hover:bg-black/5
                 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20 active:translate-y-0 active:scale-[0.98]"
        >
          View services
        </a>
      </div>

      <!-- Trust row -->
      <div class="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-semibold tracking-[-0.01em] text-[#0B0D10]/60">
        <span>Dubai, UAE</span>
        <span class="h-1 w-1 rounded-full bg-black/25"></span>
        <span>24h reply</span>
        <span class="h-1 w-1 rounded-full bg-black/25"></span>
        <span>Performance-first</span>
        <span class="h-1 w-1 rounded-full bg-black/25"></span>
        <span>SEO-ready</span>
      </div>

      <!-- Optional: tech chips -->
      <div class="mt-5 flex flex-wrap gap-2">
        <span class="rounded-full border border-black/15 bg-white px-3 py-1 text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/80">SvelteKit</span>
        <span class="rounded-full border border-black/15 bg-white px-3 py-1 text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/80">TypeScript</span>
        <span class="rounded-full border border-black/15 bg-white px-3 py-1 text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/80">Django</span>
        <span class="rounded-full border border-black/15 bg-white px-3 py-1 text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/80">Docker</span>
      </div>
    </div>

    <!-- RIGHT: Dashboard preview -->
    <div class="relative">
      <!-- Back plate -->
      <div class="absolute -inset-4 rounded-2xl border border-black/10 bg-white/40"></div>

      <!-- Rear card -->
      <div class="absolute right-6 top-6 hidden w-[92%] rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(11,13,16,0.10)] md:block"></div>

      <!-- Main card -->
      <div class="relative rounded-2xl border border-black/15 bg-white p-6 shadow-[0_20px_60px_rgba(11,13,16,0.12)] transition hover:-translate-y-[1px]">
        <!-- Window bar -->
        <div class="mb-5 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-black/20"></span>
            <span class="h-2 w-2 rounded-full bg-black/20"></span>
            <span class="h-2 w-2 rounded-full bg-black/20"></span>
          </div>
          <div class="h-px w-16 bg-black/10"></div>
        </div>

        <!-- Fake dashboard layout -->
        <div class="grid gap-4">
          <div class="rounded-xl border border-black/10 bg-[#F7F7F7] p-4">
            <div class="flex items-center justify-between">
              <div class="h-2 w-24 rounded bg-black/15"></div>
              <div class="h-2 w-10 rounded bg-[#3B82F6]/60"></div>
            </div>
            <div class="mt-4 h-24 rounded-lg bg-white border border-black/10"></div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-xl border border-black/10 bg-white p-4">
              <div class="h-2 w-20 rounded bg-black/15"></div>
              <div class="mt-4 h-16 rounded-lg bg-black/5"></div>
            </div>
            <div class="rounded-xl border border-black/10 bg-white p-4">
              <div class="h-2 w-16 rounded bg-black/15"></div>
              <div class="mt-4 h-16 rounded-lg bg-black/5"></div>
            </div>
          </div>

          <div class="rounded-xl border border-black/10 bg-white p-4">
            <div class="flex items-center justify-between">
              <div class="h-2 w-24 rounded bg-black/15"></div>
              <div class="h-2 w-12 rounded bg-black/10"></div>
            </div>
            <div class="mt-4 grid grid-cols-3 gap-3">
              <div class="h-10 rounded-lg bg-black/5"></div>
              <div class="h-10 rounded-lg bg-black/5"></div>
              <div class="h-10 rounded-lg bg-black/5"></div>
            </div>
          </div>
        </div>

        <!-- Small accent line -->
        <div class="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent"></div>
      </div>
    </div>
  </div>
</section>

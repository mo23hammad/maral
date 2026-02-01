<script lang="ts">
   import {slide, fade} from 'svelte/transition';


   let { onclick } = $props();

</script>


<!-- Overlay -->
<div
  class="fixed inset-0 z-[60] flex items-center justify-center p-4"
  role="dialog"
  aria-modal="true"
  aria-labelledby="success-title"
  out:fade
>
  <!-- Backdrop (clickable if you want to close) -->
  <button {onclick}
    type="button"
    class="absolute inset-0 bg-[#0B0D10]/40 backdrop-blur-sm"
    aria-label="Close"
  ></button>

  <!-- Modal -->
  <div
    class="relative w-full max-w-lg rounded-3xl border border-black/10 bg-white p-6 shadow-[0_30px_120px_rgba(11,13,16,0.22)]
           md:p-7"
     
  >
    <!-- quiet top rail -->
    <div class="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/45 to-transparent"></div>

    <div class="flex items-start gap-3" in:slide>
      <span class="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#3B82F6]/10">
        <span class="h-2 w-2 rounded-full bg-[#3B82F6]"></span>
      </span>

      <div class="min-w-0">
        <div
          id="success-title"
          class="font-['Space_Grotesk'] text-[18px] font-semibold tracking-[-0.02em] text-[#0B0D10]"
        >
          Message sent
        </div>

        <p class="mt-1 text-[14px] leading-[1.8] tracking-[-0.01em] text-[#0B0D10]/70">
          Thanks — I’ve received your request. I’ll reply within
          <span class="font-semibold text-[#0B0D10]/80">24 hours</span>
          <span class="text-[#0B0D10]/55">(usually faster during work hours)</span>.
        </p>

        
        <div class="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <button {onclick} type="button" class="btn-secondary w-full sm:w-auto">
            Send another message
          </button>
          <a href="/" class="btn-accent w-full sm:w-auto">
            Back to Home
          </a>
        </div>
      </div>
    </div>

    <!-- Close X -->
    <button {onclick}
      type="button"
      class="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl text-[#0B0D10]/55
             transition hover:bg-black/5 hover:text-[#0B0D10]
             focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20"
      aria-label="Close"
    >
      ✕
    </button>
  </div>
</div>


<script lang="ts">
  let showError = $state(false);
  let errorText = $state("Network error. Please try again.");
  let { value=$bindable<string>() } = $props();


  let timer: number | null = null;

  function openError(msg: string) {
    errorText = msg;
    showError = true;

    if (timer) window.clearTimeout(timer);
    timer = window.setTimeout(() => (showError = false), 10_000);
  }

  function closeError() {
    showError = false;
    if (timer) window.clearTimeout(timer);
    timer = null;
  }
  if (value){
      openError(value);
  }

  // Example usage:
  // openError("Email service is temporarily unavailable.");
</script>

{#if showError}
  <div
    class="fixed left-4 top-4 z-[80] w-[min(420px,calc(100vw-2rem))]"
    role="status"
    aria-live="polite"
  >
    <div
      class="relative overflow-hidden rounded-2xl border border-red-500/25 bg-white p-4
             shadow-[0_18px_60px_rgba(11,13,16,0.14)]"
    >
      <!-- top rail -->
      <div class="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent"></div>

      <div class="flex items-start gap-3">
        <!-- icon -->
        <span class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10">
          <span class="h-2 w-2 rounded-full bg-red-500"></span>
        </span>

        <div class="min-w-0">
          <div class="font-['Space_Grotesk'] text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10]">
            Couldn’t send message
          </div>

          <p class="mt-1 text-[13px] leading-[1.7] tracking-[-0.01em] text-[#0B0D10]/70">
            {errorText}
          </p>

          <div class="mt-2 text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/45">
            Tip: If it keeps failing, email me directly.
          </div>
        </div>

        <!-- close -->
        <button
          type="button"
          onclick={closeError}
          class="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-xl text-[#0B0D10]/50
                 transition hover:bg-black/5 hover:text-[#0B0D10]
                 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-500/20"
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      <!-- tiny timer bar (optional but nice) -->
      <div class="mt-3 h-1 w-full overflow-hidden rounded-full bg-black/5">
        <div class="h-full w-full origin-left animate-[shrink_10s_linear_forwards] bg-red-500/60"></div>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes shrink {
    from { transform: scaleX(1); }
    to   { transform: scaleX(0); }
  }
</style>

<script>
    import Dirham from "../Dirham.svelte";

    let {num, title, handover, price, points, addont, addond, bestfor, extra} = $props();
</script>


<div
  class="flex h-full flex-col group relative overflow-hidden rounded-2xl border border-black/15 bg-white p-7
         transition-[transform,border-color,box-shadow] duration-200 ease-out
         hover:-translate-y-[1px] hover:border-black/25 hover:shadow-[0_18px_60px_rgba(11,13,16,0.10)]
         focus-within:ring-4 focus-within:ring-[#3B82F6]/20"
>
  <!-- Quiet top accent -->
  <div class="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/45 to-transparent"></div>

  <!-- Header -->
  <div class="flex items-start justify-between gap-4">
    <div class="min-w-0">
      <div class="flex items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-[#3B82F6]"></span>
        <div class="font-['Space_Grotesk'] text-[20px] font-semibold tracking-[-0.01em] text-[#0B0D10]">
            {title}
        </div>
      </div>

      <p class="mt-2 text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10]/65">
        Best for: {bestfor}
      </p>
    </div>

    <span
      class="shrink-0 rounded-full border border-black/15 bg-[#F7F7F7] px-3 py-1 text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/70"
    >
      Package {num}
    </span>
  </div>

  <!-- Metrics -->
  <div class="mt-6 grid gap-3 sm:grid-cols-2">
    <div class="rounded-xl border border-black/10 bg-[#F7F7F7] p-4">
      <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">PRICE RANGE</div>
      <div class="mt-2 flex items-end justify-between gap-3">
        
        <div
          class="inline-flex items-center gap-2 whitespace-nowrap font-['Space_Grotesk'] text-[20px] font-semibold tracking-[-0.01em] text-[#0B0D10]"
        >
          <Dirham />
          {price}
        </div>
        <div class="text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/45">
          fixed scope
        </div>
      </div>
    </div>

    <div class="rounded-xl border border-black/10 bg-[#F7F7F7] p-4">
      <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">FULL HANDOVER</div>
      <div class="mt-2 flex items-end justify-between gap-3">
        <div class="font-['Space_Grotesk'] text-[20px] font-semibold tracking-[-0.01em] text-[#0B0D10]">
          {handover}
          <span class="text-[#0B0D10]">days</span>
        </div>
        <div class="text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/45">
          business
        </div>
      </div>
    </div>
  </div>

  <!-- Includes -->
  <div class="mt-6 rounded-xl border border-black/10 bg-white p-5">
    <div class="flex items-center justify-between">
      <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">INCLUDES</div>
    </div>

    <ul class="mt-4 grid gap-3 sm:grid-cols-2">
        {#each points as point}
<li class="flex gap-2 text-[14px] leading-[1.7] tracking-[-0.01em] text-[#0B0D10]/75">
                 <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                 {point}
             </li>
        {/each}          
    </ul>
  </div>

  <!-- Add-on + CTA -->
  <div class="mt-auto flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div class="rounded-xl p-4 sm:flex-1">
      <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">ADD-ON</div>
      <div class="mt-2 text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10]/75">
        {addont} 
      </div>
      <div class="mt-1 text-[13px] leading-[1.65] tracking-[-0.01em] text-[#0B0D10]/65">
        {addond}
      </div>
    </div>

    <a
      href="/services/fast-website"
      class="inline-flex items-center justify-center rounded-full bg-[#3B82F6] px-6 py-3 text-[14px] font-semibold tracking-[-0.01em] text-white
             transition hover:-translate-y-[1px] hover:brightness-95 hover:shadow-[0_14px_40px_rgba(59,130,246,0.22)]
             focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/30 active:translate-y-0 active:scale-[0.98]"
    >
      View package
      <span class="ml-2 transition-transform group-hover:translate-x-[2px]">→</span>
    </a>
  </div>

  <!-- Micro note -->
  <div class="mt-4 text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/45">
    {extra}
  </div>
</div>

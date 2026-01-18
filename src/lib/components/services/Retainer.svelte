<script>
	import Dirham from "../Dirham.svelte";

</script>

<section class="bg-[#F7F7F7] pb-16 md:pb-24">
  <div class="mx-auto w-full max-w-6xl px-4 md:px-6">
    <!-- Header -->
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/60">
        <span class="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
        ONGOING SUPPORT
      </div>

      <h2 class="mt-3 font-['Space_Grotesk'] text-[28px] leading-[1.15] font-semibold tracking-[-0.02em] text-[#0B0D10] md:text-[40px]">
        Retainer & maintenance
      </h2>

      <p class="mt-3 text-[16px] leading-[1.75] tracking-[-0.01em] text-[#0B0D10]/75 md:text-[17px]">
        Clean support options for teams that want reliability and continuous improvement.
      </p>
    </div>

    <!-- Cards -->
    <div class="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
      <!-- Monthly retainer -->
      <div
        class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/15 bg-white p-7
               transition-[transform,border-color,box-shadow] duration-200 ease-out
               hover:-translate-y-[1px] hover:border-black/25 hover:shadow-[0_18px_60px_rgba(11,13,16,0.10)]
               focus-within:ring-4 focus-within:ring-[#3B82F6]/20"
      >
        <div class="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/45 to-transparent"></div>

        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0">
            <div class="font-['Space_Grotesk'] text-[22px] font-semibold tracking-[-0.02em] text-[#0B0D10]">
              Monthly retainer
            </div>
            <p class="mt-2 text-[14px] leading-[1.75] tracking-[-0.01em] text-[#0B0D10]/70">
              Continuous iteration, support, and priority fixes — without re-scoping every change.
            </p>
          </div>

          <span class="shrink-0 rounded-full border border-black/15 bg-[#F7F7F7] px-3 py-1 text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/70">
            Most common
          </span>
        </div>

        <div class="mt-6 rounded-xl border border-black/10 bg-[#F7F7F7] p-4">
          <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">PRICE</div>
          <div class="inline-flex items-center gap-2 whitespace-nowrap font-['Space_Grotesk'] text-[20px] font-semibold tracking-[-0.01em] text-[#0B0D10]">
          <Dirham />  800–3.5k
            <span class="text-[#0B0D10]/55">/ month</span>
          </div>
        </div>

        <div class="mt-6 rounded-xl border border-black/10 bg-white p-5">
          <div class="flex items-center justify-between">
            <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">INCLUDES</div>
            <div class="h-px w-14 bg-black/10"></div>
          </div>

          <ul class="mt-4 space-y-2 text-[14px] leading-[1.7] tracking-[-0.01em] text-[#0B0D10]/75">
            <li class="flex gap-2">
              <span class="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
              Monitoring + health checks
            </li>
            <li class="flex gap-2">
              <span class="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
              Small updates &amp; UI refinements
            </li>
            <li class="flex gap-2">
              <span class="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
              Support + priority fixes
            </li>
          </ul>
        </div>

        <div class="mt-auto pt-6">
          <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">BEST FOR</div>
          <p class="mt-2 text-[13px] leading-[1.65] tracking-[-0.01em] text-[#0B0D10]/65">
            Businesses that want continuous improvement and predictable support.
          </p>
        </div>
      </div>

      <!-- Web Data Maintenance (Scraping Core) -->
      <div
        class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/15 bg-white p-7
               transition-[transform,border-color,box-shadow] duration-200 ease-out
               hover:-translate-y-[1px] hover:border-black/25 hover:shadow-[0_18px_60px_rgba(11,13,16,0.10)]
               focus-within:ring-4 focus-within:ring-[#3B82F6]/20"
      >
        <div class="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/45 to-transparent"></div>

        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0">
            <div class="font-['Space_Grotesk'] text-[22px] font-semibold tracking-[-0.02em] text-[#0B0D10]">
              Web Data Maintenance
            </div>
            <p class="mt-2 text-[14px] leading-[1.75] tracking-[-0.01em] text-[#0B0D10]/70">
              Keep data pipelines stable as websites change — with monitoring and small quality improvements.
            </p>
          </div>

          <span class="shrink-0 rounded-full border border-black/15 bg-[#F7F7F7] px-3 py-1 text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/70">
            Recommended add-on
          </span>
        </div>

        <div class="mt-6 rounded-xl border border-black/10 bg-[#F7F7F7] p-4">
          <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">PRICE</div>
          <div class="inline-flex items-center gap-2 whitespace-nowrap font-['Space_Grotesk'] text-[20px] font-semibold tracking-[-0.01em] text-[#0B0D10]">
          <Dirham />  1.5k–6k
            <span class="text-[#0B0D10]/55">/ month</span>
          </div>
        </div>

        <div class="mt-6 rounded-xl border border-black/10 bg-white p-5">
          <div class="flex items-center justify-between">
            <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">INCLUDES</div>
            <div class="h-px w-14 bg-black/10"></div>
          </div>

          <ul class="mt-4 space-y-2 text-[14px] leading-[1.7] tracking-[-0.01em] text-[#0B0D10]/75">
            <li class="flex gap-2">
              <span class="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
              Fix breakage + selector adjustments
            </li>
            <li class="flex gap-2">
              <span class="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
              Failure-rate monitoring + alerts
            </li>
            <li class="flex gap-2">
              <span class="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
              Small data quality improvements
            </li>
          </ul>
        </div>

        <div class="mt-auto pt-6">
          <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">BEST FOR</div>
          <p class="mt-2 text-[13px] leading-[1.65] tracking-[-0.01em] text-[#0B0D10]/65">
            Teams relying on consistent web data for sales, monitoring, or reporting.
          </p>
        </div>
      </div>
    </div>

    <!-- Footnote -->
    <div class="mt-8 rounded-2xl border border-black/10 bg-white p-5">
      <div class="flex items-start gap-3">
        <span class="mt-1 h-2 w-2 rounded-full bg-[#3B82F6]"></span>
        <p class="text-[13px] leading-[1.75] tracking-[-0.01em] text-[#0B0D10]/70">
          Retainer keeps your product stable and improving over time. Web Data Maintenance is ideal when your system depends on external websites that can change unexpectedly.
        </p>
      </div>
    </div>
  </div>
</section>

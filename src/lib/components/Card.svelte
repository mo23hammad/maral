<script lang="ts">
  let { title, detail } = $props<{ title: string; detail: string }>();
</script>

<div
class="group rounded-xl border border-black/15 bg-white p-6 transition-[translate,box-shadow,border-color] duration-200 ease-out
       hover:-translate-y-[1px] hover:border-black/25 hover:shadow-[0_10px_30px_rgba(11,13,16,0.10)]
       focus-within:ring-4 focus-within:ring-[#3B82F6]/20"
>
<!-- sharp-tech header detail -->
<div class="mb-4 flex items-center gap-3">
  <div class="relative h-4 w-10">
    <span
      class="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#3B82F6]
             transition-all duration-200 ease-out motion-reduce:transition-none
             group-hover:h-[2px] group-hover:w-10 group-hover:rounded-none"
    ></span>
  </div>
</div>

<h3 class="font-['Space_Grotesk'] text-[20px] leading-[1.25] font-semibold tracking-[-0.01em] text-[#0B0D10]">
    {title}
</h3>

<p class="mt-2 text-[16px] leading-[1.7] tracking-[-0.01em] text-[#0B0D10]/80">
    {detail}
</p>

<a
  href="/services/websites"
  class="group/link relative mt-5 inline-flex items-center font-semibold tracking-[-0.01em] text-[#0B0D10] transition-colors hover:text-[#3B82F6]
         focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20"
>
  Learn more <span class="ml-2 transition-transform group-hover:translate-x-[2px]">→</span>
  <span class="pointer-events-none absolute left-0 -bottom-[2px] h-px w-full origin-left scale-x-0 bg-current transition-transform duration-200 ease-out group-hover/link:scale-x-100"></span>
</a>
</div>


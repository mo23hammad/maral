<!-- PackageAccordionItem.svelte -->
<script lang="ts">
   import { Accordion } from "bits-ui";
   import { slide, fade } from "svelte/transition";
   
   // props (Svelte 5)
   let {
     value = "package-1",
     title = "Package 01 — Fast Website (SvelteKit)",
     subtitle = "For fast company sites & landing pages • 10–20 business days (handover)",
     who = "Brands that need a premium, fast website with a clean structure and strong SEO foundation.",
     included = [
       "Design system styling (typography + UI)",
       "SEO-ready pages + structure",
       "Forms + email delivery setup"
     ],
     notIncluded = ["Complex admin panels / logins", "Custom web-data modules (optional add-on)"],
     timeline = { design: "2–4 days", build: "5–12 days", launch: "2–4 days" },
     href = "/services/fast-website"
   } = $props();
</script>
<Accordion.Item
   {value}
   class="group rounded-2xl border border-black/15 bg-white transition-[border-color,box-shadow] duration-200 ease-out
   data-[state=open]:border-black/25 data-[state=open]:shadow-[0_18px_60px_rgba(11,13,16,0.10)]"
   >
   <!-- Trigger -->
   <Accordion.Header>
      <Accordion.Trigger
         class="flex w-full items-center justify-between gap-4 rounded-2xl p-6 text-left md:p-7
         focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20"
         >
         <div class="min-w-0">
            <div class="flex items-center gap-2">
               <span class="h-2 w-2 rounded-full bg-[#3B82F6]"></span>
               <span class="font-['Space_Grotesk'] text-[18px] font-semibold tracking-[-0.01em] text-[#0B0D10] md:text-[20px]">
               {title}
               </span>
            </div>
            <div class="mt-1 text-[13px] font-semibold tracking-[-0.01em] text-[#0B0D10]/60">
               {subtitle}
            </div>
         </div>
         <div class="shrink-0 flex items-center gap-3">
            <span
               class="rounded-full border border-black/15 bg-[#F7F7F7] px-3 py-1 text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/70
               group-data-[state=open]:border-black/25"
               >
            Details
            </span>
            <!-- Chevron (pure CSS) -->
            <span
               class="relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white
               transition group-data-[state=open]:border-black/20"
               aria-hidden="true"
               >
            <span
               class="h-[10px] w-[10px] rotate-45 border-r-2 border-b-2 border-[#0B0D10]/60
               transition-transform duration-200 ease-out group-data-[state=open]:-rotate-135"
               ></span>
            </span>
         </div>
      </Accordion.Trigger>
   </Accordion.Header>
   <!-- Content -->
   <Accordion.Content forceMount={true} class="px-6 pb-6 md:px-7 md:pb-7">
      <!-- Divider + animated body -->
      <div class="h-px w-full bg-black/10"></div>
      {#snippet child({ props, open })}
      {#if open}   
      <div {...props} transition:slide={{ duration: 400 }}>
      <div class="mt-6 grid gap-6 md:grid-cols-3" in:fade={{ duration: 140 }} out:fade={{ duration: 120 }}>
      <!-- Who -->
      <div>
         <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">WHO IT’S FOR</div>
         <p class="mt-2 text-[14px] leading-[1.75] tracking-[-0.01em] text-[#0B0D10]/75">
            {who}
         </p>
      </div>
      <!-- Included -->
      <div>
         <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">WHAT’S INCLUDED</div>
         <ul class="mt-3 space-y-2 text-[14px] leading-[1.7] tracking-[-0.01em] text-[#0B0D10]/75">
            {#each included as item}
            <li class="flex gap-2">
               <span class="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
               {item}
            </li>
            {/each}
         </ul>
      </div>
      <!-- Not included -->
      <div>
         <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">NOT INCLUDED</div>
         <ul class="mt-3 space-y-2 text-[14px] leading-[1.7] tracking-[-0.01em] text-[#0B0D10]/70">
            {#each notIncluded as item}
            <li class="flex gap-2">
               <span class="mt-[9px] h-1.5 w-1.5 rounded-full bg-black/25"></span>
               {item}
            </li>
            {/each}
         </ul>
      </div>
      </div>
      <!-- Timeline -->
      <div class="mt-6 rounded-xl border border-black/10 bg-[#F7F7F7] p-4">
         <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">TYPICAL TIMELINE</div>
         <div class="mt-3 grid gap-2 md:grid-cols-3">
            <div class="rounded-lg border border-black/10 bg-white p-3">
               <div class="text-[12px] font-semibold text-[#0B0D10]/60">Design</div>
               <div class="mt-1 text-[13px] font-semibold text-[#0B0D10]/75">{timeline.design}</div>
            </div>
            <div class="rounded-lg border border-black/10 bg-white p-3">
               <div class="text-[12px] font-semibold text-[#0B0D10]/60">Build</div>
               <div class="mt-1 text-[13px] font-semibold text-[#0B0D10]/75">{timeline.build}</div>
            </div>
            <div class="rounded-lg border border-black/10 bg-white p-3">
               <div class="text-[12px] font-semibold text-[#0B0D10]/60">Launch</div>
               <div class="mt-1 text-[13px] font-semibold text-[#0B0D10]/75">{timeline.launch}</div>
            </div>
         </div>
      </div>
      <!-- Link -->
      <div class="mt-6">
         <a
            href={href}
            class="group relative inline-flex items-center text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10]/80 transition-colors hover:text-[#3B82F6]
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20"
            >
         View full details
         <span class="ml-2 transition-transform group-hover:translate-x-[2px]">→</span>
         <span
            class="pointer-events-none absolute left-0 -bottom-[2px] h-px w-full origin-left scale-x-0 bg-current transition-transform duration-200 ease-out group-hover:scale-x-100"
            ></span>
         </a>
      </div>
      </div>
      {/if}
      {/snippet}
   </Accordion.Content>
</Accordion.Item>

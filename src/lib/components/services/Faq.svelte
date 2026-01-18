
<!-- FAQ.svelte (uses bits-ui Accordion) -->
<script lang="ts">
  import { Accordion } from "bits-ui";
  import {slide} from "svelte/transition"

  const faqs = [
    {
      q: "What affects price range?",
      a: [
        "Scope (pages, flows, roles), integrations (payments, email, third-party APIs), and the level of automation/monitoring.",
        "Design complexity, content readiness, and how much data logic is involved (leads, alerts, dashboards).",
        "Timeline: faster deadlines require tighter scheduling, which can raise cost."
      ]
    },
    {
      q: "What do you need from me?",
      a: [
        "Your goal + target customer (1–2 sentences).",
        "Examples you like (2–3 sites) and any brand assets (logo, colors, copy if available).",
        "If the project includes leads/monitoring: competitors list + what should be tracked (pages, fields, frequency)."
      ]
    },
    {
      q: "Can I start small and upgrade later?",
      a: [
        "Yes. Many clients start with Package 01 or 02, then expand into dashboards, automation, or monitoring.",
        "We keep the foundation clean so scaling features later doesn’t require rebuilding from scratch."
      ]
    },
    {
      q: "Do you provide hosting / VPS setup?",
      a: [
        "Yes. I can set up VPS + Docker deployment, domains, SSL, and basic monitoring.",
        "If you already have infrastructure, I can deploy into your environment and hand over documentation."
      ]
    },
    {
      q: "What does “Lead list from public sources” mean?",
      a: [
        "It means collecting publicly available business data (e.g., directories, company pages, listings) into a structured list.",
        "No private data, no hacked sources — only public information organized for sales outreach.",
        "Fields typically include: name, category, location, website, and contact links (when publicly shown)."
      ]
    },
    {
      q: "How do change alerts work?",
      a: [
        "We monitor selected competitor pages on a schedule (daily/weekly depending on scope).",
        "When changes are detected, we store a history (what changed + when) and send an email digest to the owner.",
        "Alerts can cover pricing changes, new products, announcements, or page content updates."
      ]
    },
    {
      q: "What happens if a scraper breaks?",
      a: [
        "Websites change — breakage can happen. If you have Web Data Maintenance (Scraping Core), fixes and selector updates are covered.",
        "Without maintenance, we can still fix it as a scoped task. Either way, you won’t be left guessing."
      ]
    },
    {
      q: "Do you support bilingual sites?",
      a: [
        "Yes. English + Arabic (or other languages) can be built with clean SEO structure for each language.",
        "We plan navigation, typography, spacing, and RTL needs early so the UI stays consistent."
      ]
    }
  ];
</script>

<section class="bg-[#F7F7F7] pb-16 md:pb-24">
  <div class="mx-auto w-full max-w-6xl px-4 md:px-6">
    <!-- Header -->
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/60">
        <span class="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
        FAQ
      </div>

      <h2 class="mt-3 font-['Space_Grotesk'] text-[28px] leading-[1.15] font-semibold tracking-[-0.02em] text-[#0B0D10] md:text-[40px]">
        Questions, answered
      </h2>

      <p class="mt-3 text-[16px] leading-[1.75] tracking-[-0.01em] text-[#0B0D10]/75 md:text-[17px]">
        Clear answers to the common objections — scope, pricing, hosting, and data.
      </p>
    </div>

    <!-- Accordion -->
    <div class="mt-10 rounded-2xl border border-black/15 bg-white p-2 md:mt-14 md:p-3">
      <Accordion.Root type="single" collapsible class="space-y-2">
        {#each faqs as item, i (item.q)}
          <Accordion.Item
            value={"faq-" + i}
            class="group overflow-hidden rounded-2xl border border-black/10 bg-[#F7F7F7]
                   transition-[border-color,box-shadow] duration-200 ease-out
                   data-[state=open]:border-black/20 data-[state=open]:bg-white data-[state=open]:shadow-[0_14px_45px_rgba(11,13,16,0.08)]"
          >
            <Accordion.Header>
              <Accordion.Trigger
                class="flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-4 text-left md:px-5
                       focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20"
              >
                <div class="min-w-0">
                  <div class="font-['Space_Grotesk'] text-[16px] font-semibold tracking-[-0.01em] text-[#0B0D10] md:text-[17px]">
                    {item.q}
                  </div>
                </div>

                <!-- Chevron -->
                <span
                  class="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white
                         transition data-[state=open]:border-black/20"
                  aria-hidden="true"
                >
                  <span
                    class="h-[10px] w-[10px] rotate-45 border-r-2 border-b-2 border-[#0B0D10]/60
                           transition-transform duration-200 ease-out group-data-[state=open]:-rotate-135"
                  ></span>
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content forceMount={true} class="px-4 pb-4 md:px-5 md:pb-5">
            {#snippet child({open,props})}
            {#if open} 
            <div {...props} class="h-px w-full bg-black/10" transition:slide={{duration: 900}}></div>

            <div class="my-4 ml-4 space-y-3" transition:slide={{duration: 500}}>
            {#each item.a as line (line)}
                <p class="text-[14px] leading-[1.85] tracking-[-0.01em] text-[#0B0D10]/75">
                    {line}
                </p>
            {/each}
            </div>

            {/if}    
            {/snippet}
            </Accordion.Content>
          </Accordion.Item>
        {/each}
      </Accordion.Root>
    </div>

    <!-- Footnote strip -->
    <div class="mt-8 rounded-2xl border border-black/10 bg-white p-5">
      <div class="flex items-start gap-3">
        <span class="mt-1 h-2 w-2 rounded-full bg-[#3B82F6]"></span>
        <p class="text-[13px] leading-[1.75] tracking-[-0.01em] text-[#0B0D10]/70">
          Still unsure? Start with a small scope — we can expand safely once the foundation is live.
        </p>
      </div>
    </div>
  </div>
</section>

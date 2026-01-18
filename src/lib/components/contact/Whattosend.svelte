
<script lang="ts">
  import { Card } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Separator } from "$lib/components/ui/separator";
</script>

<section class="bg-[#F7] pb-10 md:pb-14">
  <div class="mx-auto w-full max-w-6xl px-4 md:px-6">
    <Card
      class="relative overflow-hidden rounded-3xl border border-border bg-card p-6
             shadow-[0_18px_60px_rgba(11,13,16,0.06)] md:p-8"
    >
      <!-- quiet top rail -->
      <div class="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/45 to-transparent"></div>

      <!-- Header -->
      <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div class="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-foreground/60">
            <span class="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
            WHAT TO SEND
          </div>

          <h3 class="mt-3 font-['Space_Grotesk'] text-[20px] font-semibold tracking-[-0.02em] text-foreground md:text-[22px]">
            The essentials for a fast, accurate quote
          </h3>

          <p class="mt-2 text-[14px] leading-[1.8] tracking-[-0.01em] text-foreground/70">
            You can paste notes, links, or screenshots. Short is fine — clarity matters more than detail.
          </p>
        </div>

        <Badge
          variant="secondary"
          class="w-fit rounded-full border border-border bg-background px-3 py-1 text-[12px] font-semibold tracking-[-0.01em] text-foreground/70"
        >
          ~3 minutes
        </Badge>
      </div>

      <Separator class="my-6 bg-border" />

      <!-- Content grid -->
      <div class="grid gap-4 md:grid-cols-2">
        <!-- Left column -->
        <div class="space-y-4">
          <div class="rounded-2xl border border-border bg-background p-5">
            <div class="text-[12px] font-semibold tracking-[0.14em] text-foreground/55">
              1) GOAL (1 SENTENCE)
            </div>
            <p class="mt-2 text-[14px] leading-[1.8] tracking-[-0.01em] text-foreground/75">
              Example: “A fast business website that converts inbound leads and supports SEO.”
            </p>
          </div>

          <div class="rounded-2xl border border-border bg-background p-5">
            <div class="text-[12px] font-semibold tracking-[0.14em] text-foreground/55">
              2) PAGES / FEATURES NEEDED
            </div>
            <ul class="mt-3 space-y-2 text-[14px] leading-[1.75] tracking-[-0.01em] text-foreground/75">
              <li class="flex gap-2">
                <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                Pages: Home, About, Services, Contact
              </li>
              <li class="flex gap-2">
                <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                Features: form → email, blog, dashboard, admin
              </li>
              <li class="flex gap-2">
                <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                Integrations: analytics, payments, CRM, etc.
              </li>
            </ul>
          </div>
        </div>

        <!-- Right column -->
        <div class="space-y-4">
          <div class="rounded-2xl border border-border bg-background p-5">
            <div class="text-[12px] font-semibold tracking-[0.14em] text-foreground/55">
              3) EXAMPLES YOU LIKE (2–3 LINKS)
            </div>
            <div class="mt-3 space-y-2">
              <div class="rounded-xl border border-border bg-card px-4 py-3 text-[14px] font-semibold tracking-[-0.01em] text-foreground/70">
                https://example.com (style / layout)
              </div>
              <div class="rounded-xl border border-border bg-card px-4 py-3 text-[14px] font-semibold tracking-[-0.01em] text-foreground/70">
                https://example.com (copy / tone)
              </div>
              <div class="rounded-xl border border-border bg-card px-4 py-3 text-[14px] font-semibold tracking-[-0.01em] text-foreground/70">
                https://example.com (features)
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-border bg-background p-5">
            <div class="flex items-center justify-between gap-3">
              <div class="text-[12px] font-semibold tracking-[0.14em] text-foreground/55">
                4) IF LEADS / MONITORING
              </div>
              <Badge
                variant="secondary"
                class="rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-semibold tracking-[-0.01em] text-foreground/65"
              >
                optional
              </Badge>
            </div>

            <ul class="mt-3 space-y-2 text-[14px] leading-[1.75] tracking-[-0.01em] text-foreground/75">
              <li class="flex gap-2">
                <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                Competitor list (URLs)
              </li>
              <li class="flex gap-2">
                <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                What to track (price / new products / content changes)
              </li>
              <li class="flex gap-2">
                <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                Frequency (daily / weekly) + email recipients
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer note -->
      <div class="mt-6 rounded-2xl border border-border bg-card px-5 py-4">
        <p class="text-[13px] font-semibold tracking-[-0.01em] text-foreground/65">
          If you don’t have all of this — no problem. Send what you have, and we’ll clarify the rest in a quick call.
        </p>
      </div>
    </Card>
  </div>
</section>

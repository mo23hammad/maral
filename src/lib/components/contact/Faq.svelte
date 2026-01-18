<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";
  import { Card } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
</script>

<section class="bg-[#F7] pb-14 md:pb-20">
  <div class="mx-auto w-full max-w-6xl px-4 md:px-6">
    <Card
      class="relative overflow-hidden rounded-3xl border border-border bg-card p-6
             shadow-[0_18px_60px_rgba(11,13,16,0.06)] md:p-8"
    >
      <!-- quiet top rail -->
      <div class="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/45 to-transparent"></div>

      <!-- Header -->
      <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-foreground/60">
            <span class="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
            FAQ
          </div>

          <h2 class="mt-3 font-['Space_Grotesk'] text-[24px] font-semibold tracking-[-0.02em] text-foreground md:text-[30px]">
            Quick answers before you send
          </h2>

          <p class="mt-2 text-[14px] leading-[1.85] tracking-[-0.01em] text-foreground/70">
            Clear expectations. No surprises. If something isn’t listed, send your question — I’ll reply fast.
          </p>
        </div>

        <div class="flex gap-2">
          <Badge variant="secondary" class="rounded-full border border-border bg-background px-3 py-1 text-[12px] font-semibold text-foreground/70">
            Reply: 24h max
          </Badge>
          <Badge variant="secondary" class="rounded-full border border-border bg-background px-3 py-1 text-[12px] font-semibold text-foreground/70">
            Often &lt; 2h (work hours)
          </Badge>
        </div>
      </div>

      <!-- Accordion -->
      <div class="mt-6 md:mt-8">
        <Accordion.Root type="single" collapsible class="space-y-3">
          <Accordion.Item value="reply" class="rounded-2xl border border-border bg-background px-4 py-1">
            <Accordion.Trigger
              class="flex w-full items-center justify-between gap-4 py-4 text-left
                     font-['Space_Grotesk'] text-[16px] font-semibold tracking-[-0.01em] text-foreground
                     outline-none"
            >
              When will you reply?
            </Accordion.Trigger>
            <Accordion.Content class="pb-4 text-[14px] leading-[1.85] tracking-[-0.01em] text-foreground/70">
              During work hours I usually reply within <span class="font-semibold text-foreground/80">2 hours</span>.
              To keep things reliable, I promise a <span class="font-semibold text-foreground/80">24-hour maximum</span> response time.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="upgrade" class="rounded-2xl border border-border bg-background px-4 py-1">
            <Accordion.Trigger
              class="flex w-full items-center justify-between gap-4 py-4 text-left
                     font-['Space_Grotesk'] text-[16px] font-semibold tracking-[-0.01em] text-foreground
                     outline-none"
            >
              Can we start with Package 1 and upgrade later?
            </Accordion.Trigger>
            <Accordion.Content class="pb-4 text-[14px] leading-[1.85] tracking-[-0.01em] text-foreground/70">
              Yes. We can start with a fast website (Package 1) and upgrade to a leads panel, monitoring, or a dashboard later.
              The build is structured to stay maintainable as features grow.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="vps" class="rounded-2xl border border-border bg-background px-4 py-1">
            <Accordion.Trigger
              class="flex w-full items-center justify-between gap-4 py-4 text-left
                     font-['Space_Grotesk'] text-[16px] font-semibold tracking-[-0.01em] text-foreground
                     outline-none"
            >
              Do you do VPS / Docker setup?
            </Accordion.Trigger>
            <Accordion.Content class="pb-4 text-[14px] leading-[1.85] tracking-[-0.01em] text-foreground/70">
              Yes. I can set up VPS + Docker deployment, environment variables, domain/SSL, and a clean handover.
              If you already have hosting, I’ll adapt to it.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="bilingual" class="rounded-2xl border border-border bg-background px-4 py-1">
            <Accordion.Trigger
              class="flex w-full items-center justify-between gap-4 py-4 text-left
                     font-['Space_Grotesk'] text-[16px] font-semibold tracking-[-0.01em] text-foreground
                     outline-none"
            >
              Do you support bilingual sites (EN/AR)?
            </Accordion.Trigger>
            <Accordion.Content class="pb-4 text-[14px] leading-[1.85] tracking-[-0.01em] text-foreground/70">
              Yes — English/Arabic and any other languages. That includes RTL support, correct typography, and clean SEO structure
              (separate routes or locale-based URLs depending on your needs).
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="nda" class="rounded-2xl border border-border bg-background px-4 py-1">
            <Accordion.Trigger
              class="flex w-full items-center justify-between gap-4 py-4 text-left
                     font-['Space_Grotesk'] text-[16px] font-semibold tracking-[-0.01em] text-foreground
                     outline-none"
            >
              Do you sign an NDA?
            </Accordion.Trigger>
            <Accordion.Content class="pb-4 text-[14px] leading-[1.85] tracking-[-0.01em] text-foreground/70">
              Yes. If you need an NDA before sharing details, send it over and I’ll sign it.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="quote" class="rounded-2xl border border-border bg-background px-4 py-1">
            <Accordion.Trigger
              class="flex w-full items-center justify-between gap-4 py-4 text-left
                     font-['Space_Grotesk'] text-[16px] font-semibold tracking-[-0.01em] text-foreground
                     outline-none"
            >
              What affects the quote?
            </Accordion.Trigger>
            <Accordion.Content class="pb-4">
              <div class="text-[14px] leading-[1.85] tracking-[-0.01em] text-foreground/70">
                Price is mainly driven by scope and complexity. Here’s what typically moves it:
              </div>

              <ul class="mt-4 grid gap-3 md:grid-cols-2">
                <li class="flex gap-2 text-[14px] leading-[1.8] tracking-[-0.01em] text-foreground/70">
                  <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                  <span><span class="font-semibold text-foreground/80">Scope:</span> pages, features/modules, environments, what’s included vs excluded.</span>
                </li>

                <li class="flex gap-2 text-[14px] leading-[1.8] tracking-[-0.01em] text-foreground/70">
                  <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                  <span><span class="font-semibold text-foreground/80">Complexity:</span> custom logic, edge cases, performance requirements.</span>
                </li>

                <li class="flex gap-2 text-[14px] leading-[1.8] tracking-[-0.01em] text-foreground/70">
                  <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                  <span><span class="font-semibold text-foreground/80">Current setup:</span> existing code quality, stack, access, documentation.</span>
                </li>

                <li class="flex gap-2 text-[14px] leading-[1.8] tracking-[-0.01em] text-foreground/70">
                  <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                  <span><span class="font-semibold text-foreground/80">Integrations:</span> third-party APIs, payments, SSO, email/SMS, analytics.</span>
                </li>

                <li class="flex gap-2 text-[14px] leading-[1.8] tracking-[-0.01em] text-foreground/70">
                  <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                  <span><span class="font-semibold text-foreground/80">Data work:</span> migration, cleanup, backups, reporting.</span>
                </li>

                <li class="flex gap-2 text-[14px] leading-[1.8] tracking-[-0.01em] text-foreground/70">
                  <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                  <span><span class="font-semibold text-foreground/80">Security & compliance:</span> roles, permissions, logging, audits, standards.</span>
                </li>

                <li class="flex gap-2 text-[14px] leading-[1.8] tracking-[-0.01em] text-foreground/70">
                  <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                  <span><span class="font-semibold text-foreground/80">Testing & QA:</span> test cases, automation, bug-fix buffer.</span>
                </li>

                <li class="flex gap-2 text-[14px] leading-[1.8] tracking-[-0.01em] text-foreground/70">
                  <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]"></span>
                  <span><span class="font-semibold text-foreground/80">Timeline & support:</span> rush work costs more; deployment, monitoring, handover/SLA.</span>
                </li>
              </ul>

              <div class="mt-5 rounded-2xl border border-border bg-card px-4 py-3 text-[13px] font-semibold tracking-[-0.01em] text-foreground/65">
                You’ll receive a written scope before build — so pricing stays transparent.
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </Card>
  </div>
</section>

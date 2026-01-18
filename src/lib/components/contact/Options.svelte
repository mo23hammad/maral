
<script lang="ts">
  import { Instagram, Linkedin, Github, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Separator } from "$lib/components/ui/separator";
  import { Badge } from "$lib/components/ui/badge";
  import { Slider } from "$lib/components/ui/slider/index.js";  
  import * as Field from "$lib/components/ui/field/index.js";
  import Dirham from "../Dirham.svelte";
  import Timeline from "../Timeline.svelte";

  // Form state (optional)
  let name = $state("");
  let email = $state("");
  let company = $state("");
  let message = $state("");

  let budget:number[]= $state([2000,110000]);
  let timeline: string=$state('');
  </script>

<section class="bg-[#F7F7F7] pb-5 md:pb-5">
  <div class="mx-auto w-full max-w-6xl px-4 md:px-6">
    <div class="grid gap-6 md:grid-cols-12">
      <!-- LEFT: FORM -->
      <Card class="relative overflow-hidden md:col-span-8 border-black/10">
        <!-- quiet top rail -->
        <div class="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/45 to-transparent"></div>

        <CardHeader class="p-7 md:p-10">
          <div class="flex items-start justify-between gap-4">
            <div>
              <div class="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/60">
                <span class="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
                REQUEST
              </div>

              <CardTitle class="mt-3 font-['Space_Grotesk'] text-[22px] tracking-[-0.02em] text-[#0B0D10] md:text-[26px]">
                Send the essentials
              </CardTitle>

              <CardDescription class="mt-2 text-[14px] leading-[1.8] tracking-[-0.01em] text-[#0B0D10]/70">
                Short form only. Enough to give you a clear quote and timeline.
              </CardDescription>
            </div>

            <Badge class="hidden md:inline-flex rounded-full border border-black/10 bg-[#F7F7F7] text-[#0B0D10]/65">
              ~2 minutes
            </Badge>
          </div>
        </CardHeader>

        <CardContent class="px-7 pb-7 md:px-10 md:pb-10">
          <form class="space-y-5">
            <!-- Row 1 -->
            <div class="grid gap-4 md:grid-cols-2">
              <div class="space-y-2">
                <Label class="text-[12px] font-semibold tracking-[0.12em] text-[#0B0D10]/55" for="name">NAME</Label>
                <Input
                  id="name"
                  bind:value={name}
                  placeholder="Your name"
                  class="h-12 rounded-2xl border-black/15 bg-white text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10]
                         placeholder:text-[#0B0D10]/35
                         focus-visible:ring-4 focus-visible:ring-[#3B82F6]/15"
                />
              </div>

              <div class="space-y-2">
                <Label class="text-[12px] font-semibold tracking-[0.12em] text-[#0B0D10]/55" for="email">EMAIL</Label>
                <Input
                  id="email"
                  type="email"
                  bind:value={email}
                  placeholder="you@company.com"
                  class="h-12 rounded-2xl border-black/15 bg-white text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10]
                         placeholder:text-[#0B0D10]/35
                         focus-visible:ring-4 focus-visible:ring-[#3B82F6]/15"
                />
              </div>
            </div>

            <!-- Company -->
            <div class="space-y-2">
              <Label class="text-[12px] font-semibold tracking-[0.12em] text-[#0B0D10]/55" for="company">
                COMPANY <span class="text-[#0B0D10]/35">(optional)</span>
              </Label>
              <Input
                id="company"
                bind:value={company}
                placeholder="Company name"
                class="h-12 rounded-2xl border-black/15 bg-white text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10]
                       placeholder:text-[#0B0D10]/35
                       focus-visible:ring-4 focus-visible:ring-[#3B82F6]/15"
              />
            </div>

            <!-- Need -->
            <div class="space-y-2">
              <Label class="text-[12px] font-semibold tracking-[0.12em] text-[#0B0D10]/55" for="need">
                WHAT DO YOU NEED?
              </Label>
              <Textarea
                id="need"
                bind:value={message}
                rows={6}
                placeholder="Example: A fast business website + a simple leads panel. Also want competitor monitoring weekly."
                class="min-h-[140px] resize-none rounded-2xl border-black/15 bg-white text-[14px] leading-[1.85] tracking-[-0.01em] text-[#0B0D10]
                       placeholder:text-[#0B0D10]/35
                       focus-visible:ring-4 focus-visible:ring-[#3B82F6]/15"
              />
            </div>

            <!-- Row 2 -->
            <div class="grid gap-4 md:grid-cols-2">
              <div class="space-y-2">
                  <Field.Field>
                    <Field.Label class="text-[12px] font-semibold tracking-[0.12em] text-[#0B0D10]/55">PRICE RANGE</Field.Label>
                    <Field.Description class="inline-flex items-center">
                      Set your budget range (<Dirham /><span class="font-medium tabular-nums"
                        >{new Intl.NumberFormat().format(budget[0])}</span
                      >
                      -
                      <span class="font-medium tabular-nums">{new Intl.NumberFormat().format(budget[1])}</span>).
                    </Field.Description>
                    <Slider
                      type="multiple"
                      bind:value={budget}
                      max={110000}
                      min={2000}
                      step={1000}
                      class="mt-2 w-full"
                      aria-label="Price Range"
                    />
                  </Field.Field>
                </div>
              <div class="space-y-2">
                <Timeline />
              </div>
            </div>

            <Separator class="my-2 bg-black/10" />

            <!-- Submit -->
            <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <Button
                type="submit"
                class="h-12 rounded-full bg-[#3B82F6] px-6 text-[14px] font-semibold tracking-[-0.01em] text-white
                       hover:brightness-95 hover:shadow-[0_18px_60px_rgba(59,130,246,0.22)]
                       focus-visible:ring-4 focus-visible:ring-[#3B82F6]/30"
              >
                Request a quote
                <ArrowRight class="ml-2 h-4 w-4" />
              </Button>

              <p class="text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/45">
                Short message is enough — I’ll ask the right follow-up questions.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>

      <!-- RIGHT: DIRECT CONTACT -->
      <aside class="md:col-span-4">
        <div class="md:sticky md:top-24 space-y-6">
          <Card class="border-black/10">
            <CardHeader class="p-7">
              <div class="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/60">
                <span class="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
                DIRECT
              </div>

              <CardTitle class="mt-3 font-['Space_Grotesk'] text-[20px] tracking-[-0.02em] text-[#0B0D10]">
                Direct contact
              </CardTitle>

              <CardDescription class="mt-2 text-[13px] leading-[1.75] tracking-[-0.01em] text-[#0B0D10]/70">
                Prefer email or WhatsApp? Use the options below.
              </CardDescription>
            </CardHeader>

            <CardContent class="px-7 pb-7 space-y-3">
              <a
                href="mailto:mohammad.abedi.code@gmail.com"
                class="group flex items-center justify-between rounded-2xl border border-black/10 bg-[#F7F7F7] px-4 py-3
                       transition hover:bg-white hover:border-black/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20"
              >
                <div class="flex items-start gap-3 min-w-0">
                  <span class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-black/10 bg-white">
                    <Mail class="h-4 w-4 text-[#0B0D10]/70" />
                  </span>
                  <div class="min-w-0">
                    <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">EMAIL</div>
                    <div class="mt-1 truncate text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10]/80 group-hover:text-[#0B0D10]">
                      mohammad.abedi.code@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowRight class="h-4 w-4 text-[#0B0D10]/45 group-hover:text-[#3B82F6]" />
              </a>

              <a
                href="tel:+971503148559"
                class="group flex items-center justify-between rounded-2xl border border-black/10 bg-[#F7F7F7] px-4 py-3
                       transition hover:bg-white hover:border-black/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20"
              >
                <div class="flex items-start gap-3 min-w-0">
                  <span class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-black/10 bg-white">
                    <Phone class="h-4 w-4 text-[#0B0D10]/70" />
                  </span>
                  <div class="min-w-0">
                    <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">PHONE / WHATSAPP</div>
                    <div class="mt-1 truncate text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10]/80 group-hover:text-[#0B0D10]">
                      +971 50 314 8559
                    </div>
                  </div>
                </div>
                <ArrowRight class="h-4 w-4 text-[#0B0D10]/45 group-hover:text-[#3B82F6]" />
              </a>

              <div class="rounded-2xl border border-black/10 bg-[#F7F7F7] px-4 py-3">
                <div class="flex items-start gap-3">
                  <span class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-black/10 bg-white">
                    <MapPin class="h-4 w-4 text-[#0B0D10]/70" />
                  </span>
                  <div>
                    <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">LOCATION</div>
                    <div class="mt-1 text-[14px] font-semibold tracking-[-0.01em] text-[#0B0D10]/80">
                      Dubai, UAE
                    </div>
                  </div>
                </div>
              </div>

              <Separator class="my-2 bg-black/10" />

              <div>
                <div class="text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/55">SOCIAL</div>
                <div class="mt-3 flex items-center justify-center gap-2">
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-[#F7F7F7] text-[#0B0D10]/70
                           transition hover:bg-white hover:border-black/20 hover:text-[#0B0D10]
                           focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <Linkedin class="h-5 w-5" />
                  </a>

                  <a
                    href="https://github.com/mo23hammad"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-[#F7F7F7] text-[#0B0D10]/70
                           transition hover:bg-white hover:border-black/20 hover:text-[#0B0D10]
                           focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <Github class="h-5 w-5" />
                  </a>

                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-[#F7F7F7] text-[#0B0D10]/70
                           transition hover:bg-white hover:border-black/20 hover:text-[#0B0D10]
                           focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <Instagram class="h-5 w-5" />
                  </a>

                  <a
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-[#F7F7F7] text-[#0B0D10]/70
                           transition hover:bg-white hover:border-black/20 hover:text-[#0B0D10]
                           focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20"
                    aria-label="YouTube"
                    title="YouTube"
                  >
                    <Youtube class="h-5 w-5" />
                  </a>
                </div>

                <div class="mt-4 rounded-2xl border border-black/10 bg-white p-4">
                  <div class="flex items-center gap-2 text-[13px] font-semibold tracking-[-0.01em] text-[#0B0D10]/75">
                    <span class="h-2 w-2 rounded-full bg-[#3B82F6]"></span>
                    Fast reply • Clear scope
                  </div>
                  <p class="mt-2 text-[12px] leading-[1.75] tracking-[-0.01em] text-[#0B0D10]/55">
                    If you’re not sure about budget or timeline, choose “Not sure yet” — we’ll define it together.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </aside>
    </div>
  </div>
</section>


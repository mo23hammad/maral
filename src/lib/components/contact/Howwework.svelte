
<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { Separator } from "$lib/components/ui/separator";
  import { Card } from "$lib/components/ui/card";
  import { ArrowRight } from "lucide-svelte";
</script>

<section class="bg-[#F7] pb-10 md:pb-16">
  <div class="mx-auto w-full max-w-6xl px-4 md:px-6">
    <Card
      class="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-6
             shadow-[0_18px_60px_rgba(11,13,16,0.06)] md:px-8"
    >

      <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <!-- Steps -->
        <div class="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" class="rounded-full px-3 py-1 text-[15px] font-semibold tracking-[-0.01em] w-20 h-10">
            Discover
          </Badge>

          <ArrowRight class="h-5 w-5" />


          <Badge variant="secondary" class="rounded-full px-3 py-1 text-[15px] font-semibold tracking-[-0.01em] w-20 h-10">
            Design
          </Badge>

          <ArrowRight class="h-5 w-5"/>

          <Badge variant="secondary" class="rounded-full px-3 py-1 text-[15px] font-semibold tracking-[-0.01em] w-20 h-10">
            Build
          </Badge>

          <ArrowRight class="h-5 w-5"/>

          <Badge variant="secondary" class="rounded-full px-3 py-1 text-[15px] font-semibold tracking-[-0.01em] w-20 h-10">
            Launch
          </Badge>
        </div>

        <!-- Promise line -->
        <div class="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3">
          <span class="h-2 w-2 rounded-full bg-[#3B82F6]"></span>
          <p class="text-[13px] font-semibold tracking-[-0.01em] text-foreground/70">
            Weekly demos + clear scope + handover
          </p>
        </div>
      </div>
    </Card>
  </div>
</section>


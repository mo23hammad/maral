<script>
    import Card from "../Card.svelte";
</script>
<section class="bg-[#F7F7F7] py-16 md:py-24">
  <div class="mx-auto w-full max-w-6xl px-4">
    <!-- Header -->
    <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div class="max-w-2xl">
        <div class="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-[#3B82F6]">
          <span class="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
          SERVICES
        </div>

        <h2 class="mt-3 font-['Space_Grotesk'] text-[28px] leading-[1.15] font-semibold tracking-[-0.02em] text-[#0B0D10] md:text-[40px]">
          What we build
        </h2>

        <p class="mt-3 text-[16px] leading-[1.7] tracking-[-0.01em] text-[#0B0D10]/80 md:text-[17px]">
          Sharp, performance-first builds — from public websites to internal dashboards and reliable backends.
        </p>
      </div>

      <!-- Optional CTA -->
      <a
        href="/services"
        class="group relative inline-flex items-center font-semibold tracking-[-0.01em] text-[#0B0D10] transition-colors hover:text-[#3B82F6] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20"
      >
        View all services
        <span class="pointer-events-none absolute left-0 -bottom-[2px] h-px w-full origin-left scale-x-0 bg-current transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
      </a>
    </div>

    <!-- Cards -->
    <div class="mt-10 grid gap-6 md:mt-14 md:grid-cols-3">
      <Card  
        title = "Website" 
        detail= "Landing pages and company sites that load fast, look sharp, and stay SEO-structured."/>
      <Card
        title="Dashboards"
        detail="Clean admin panels with role-based access, analytics views, and scalable UI components."/>
      <Card
        title="Backend & Integrations"
        detail="APIs, databases, payments, email, and automation — wired cleanly with maintainable architecture."/>
      </div>
  </div>
</section>

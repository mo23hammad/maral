<script>
	import CardP from "./CardP.svelte";

</script>

<section id="packages" class="bg-[#F7F7F7] pb-16 md:pb-24">
  <div class="mx-auto w-full max-w-6xl px-4">
    <!-- Section header -->
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-[#0B0D10]/60">
        <span class="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
        PACKAGES
      </div>

      <h2 class="mt-3 font-['Space_Grotesk'] text-[28px] leading-[1.15] font-semibold tracking-[-0.02em] text-[#0B0D10] md:text-[40px]">
        Choose a package
      </h2>

      <p class="mt-3 text-[16px] leading-[1.75] tracking-[-0.01em] text-[#0B0D10]/75 md:text-[17px]">
        Clear ranges. Clear deliverables. Full handover timelines included.
      </p>
    </div>

    <!-- Cards grid -->
    <div class="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
      <!-- Package 1 -->
      <!-- {num, title, handover, price, points, addon, bestfor} -->
      
    <CardP
      num="01"
      title="Fast Website (SvelteKit)"
      handover="10–20 business days"
      price="4k–12k"
      points={[
        "High-performance SvelteKit build",
        "SEO-ready structure + clean UI",
        "Contact forms + email delivery setup",
        "Deployment + handover"
      ]}
      addont="Lead Starter (one-time)"
      addond="Build a lead list from public sources."
      bestfor="Fast company sites & landing pages"
      extra="Ideal when you want speed, clean structure, and a premium feel."
    />

    <CardP
      num="02"
      title="Website + Admin Leads Panel + Lead Intelligence"
      handover="20–35 business days"
      price="10k–25k"
      points={[
        "Website + web-data module (recommended)",
        "Admin panel with Leads/Targets tab",
        "Import/sync scraped leads (manual or scheduled)",
        "Tags + notes + status (scope-based)"
      ]}
      addont="Change Alerts"
      addond="Monitor competitor pages (price changes, new products, announcements) with weekly/daily email digest. (+4k–12k AED)"
      bestfor="Inbound website + scraped leads for outbound sales"
      extra="Best pitch: inbound + outbound in one system."
    />

    <CardP
      num="03"
      title="Mini CRM/Dashboard + Automation & Monitoring Suite"
      handover="30–60 business days"
      price="18k–60k"
      points={[
        "Dashboard foundation + roles/permissions",
        "Scraping-driven workflows (baseline included)",
        "Automation (scheduled jobs) + reporting basics",
        "Choose 1–2 modules as part of the build"
      ]}
      addont="Add Modules (scope expands timeline)"
      addond="Lead Discovery → CRM (+12k–35k AED) • Competitor Monitoring (+10k–30k AED) • Price Intelligence (advanced) (+18k–45k AED)"
      bestfor="Internal systems, monitoring dashboards, and automation suites"
      extra="Timeline varies by module complexity and data sources."
    />

    <CardP
      num="04"
      title="Ecommerce Store (Custom)"
      handover="20–70+ business days"
      price="8k–110k"
      points={[
        "Custom storefront + admin workflows",
        "UAE payments integration",
        "Shipping/courier integration support",
        "Scalable product & order foundation"
      ]}
      addont="Advanced ecommerce options"
      addond="Advanced catalog rules, inventory logic, and automation depending on complexity."
      bestfor="Selling products online with UAE payments & shipping"
      extra="Final scope depends on catalog size, checkout complexity, and integrations."
    />

    <!-- Footnote -->
    <div class="mt-8 text-[12px] font-semibold tracking-[-0.01em] text-[#0B0D10]/45">
      Delivery time = full handover. Exact scope is confirmed in a written proposal before build.
    </div>
  </div>
</section>

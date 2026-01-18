
<script lang="ts">
  import { Accordion } from "bits-ui";
  import Accordionpackage from "./Accordionpackage.svelte";
</script>


<section class="bg-[#F7F7F7] pb-12 md:pb-16">
  <div class="mx-auto w-full max-w-6xl px-4">
    <Accordion.Root type="single" collapsible class="space-y-4">
      <!-- Package 01 -->
      <Accordionpackage
        value="p1"
        title="Package 01 — Fast Website (SvelteKit)"
        subtitle="For fast company sites & landing pages • 10–20 business days (handover)"
        who="Brands that need a premium, fast website with a clean structure and strong SEO foundation."
        included={[
          "Design system styling (typography + UI)",
          "SEO-ready pages + structure",
          "Forms + email delivery setup"
        ]}
        notIncluded={[
          "Complex admin panels / logins",
          "Custom scraping / web-data modules (optional add-on)"
        ]}
        timeline={{ design: "2–4 days", build: "5–12 days", launch: "2–4 days" }}
        href="/services/fast-website"
      />

      <!-- Package 02 -->
      <Accordionpackage
        value="p2"
        title="Package 02 — Website + Leads Panel"
        subtitle="For inbound website + outbound leads • 20–35 business days (handover)"
        who="Businesses that want a website plus a simple lead workspace to run outbound sales."
        included={[
          "Website + web-data module (recommended)",
          "Admin panel: Leads / Targets tab",
          "Import/sync leads (manual import or scheduled)",
          "Tags + notes + status (scope-based)"
        ]}
        notIncluded={[
          "Full CRM automation pipeline (Package 03)",
          "Advanced enrichment/scoring (optional)"
        ]}
        timeline={{ design: "4–7 days", build: "10–20 days", launch: "4–8 days" }}
        href="/services/leads-intelligence"
      />

      <!-- Package 03 -->
      <Accordionpackage
        value="p3"
        title="Package 03 — Mini CRM + Automation & Monitoring Suite"
        subtitle="For internal systems + monitoring • 30–60 business days (handover)"
        who="Teams that need an internal dashboard, automation workflows, and ongoing monitoring—not just a website."
        included={[
          "Dashboard foundation + roles/permissions",
          "Scraping-driven workflows (baseline included)",
          "Automation (scheduled jobs) + reporting basics",
          "Choose 1–2 modules as part of the build"
        ]}
        notIncluded={[
          "Unlimited modules (scope expands timeline)",
          "Enterprise SSO / advanced compliance (optional)"
        ]}
        timeline={{ design: "7–12 days", build: "15–35 days", launch: "8–13 days" }}
        href="/services/mini-crm"
      />

      <!-- Package 04 -->
      <Accordionpackage
        value="p4"
        title="Package 04 — Ecommerce Store (Custom)"
        subtitle="For selling online with UAE payments & shipping • 20–70+ business days (handover)"
        who="Businesses that want a custom storefront with scalable admin workflows, payments, and shipping integrations."
        included={[
          "Custom storefront + admin workflows",
          "UAE payments integration",
          "Shipping/courier integration support",
          "Scalable product & order foundation"
        ]}
        notIncluded={[
          "ERP-level inventory / multi-warehouse logic (optional)",
          "Marketplace integrations (scope-based)"
        ]}
        timeline={{ design: "6–14 days", build: "10–45 days", launch: "4–11 days" }}
        href="/services/ecommerce"
      />
    </Accordion.Root>
  </div>
</section>


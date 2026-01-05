
<script lang="ts">
  import { Instagram, Linkedin, Github, Youtube } from 'lucide-svelte';
</script>

<footer class="border-t border-white/10 bg-[#0B0D10]">
  <div class="mx-auto max-w-6xl px-4 py-12">
    <!-- Top row -->
    <div class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
      <!-- Brand + contact -->
      <div class="max-w-sm">
        <div class="flex items-center gap-3">
          <!-- Logo placeholder -->
          <span class="h-7 w-7 rounded-md border border-white/15 bg-white/5"></span>

          <span class="font-['Space_Grotesk'] text-[16px] font-semibold tracking-[-0.02em] text-white">
            Maral
          </span>
        </div>

        <p class="mt-4 text-[14px] leading-[1.7] tracking-[-0.01em] text-white/70">
          Websites and systems built with clarity, performance, and clean engineering.
        </p>

        <div class="mt-6 space-y-2 text-[14px] font-semibold tracking-[-0.01em]">
          <a
            href="mailto:mohammad.abedi.code@gmail.com"
            class="block text-white/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25"
          >
            mohammad.abedi.code@gmail.com
          </a>
          <a
            href="tel:+971503148559"
            class="block text-white/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25"
          >
            +971 50 314 8559
          </a>
          <div class="text-white/50 text-[13px] font-medium">
            Dubai, UAE
          </div>
        </div>
      </div>

      <!-- Columns -->
      <div class="grid grid-cols-2 gap-10 md:grid-cols-3">
        <!-- Company -->
        <div>
          <div class="text-[12px] font-semibold tracking-[0.14em] text-white/50">COMPANY</div>
          <div class="mt-4 space-y-3 text-[14px] font-semibold tracking-[-0.01em]">
            <a href="/about" class="block text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25">
              About Us
            </a>
            <a href="/services" class="block text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25">
              Services
            </a>
            <a href="/contact" class="block text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25">
              Contact
            </a>
          </div>
        </div>

        <!-- Latest -->
        <div>
          <div class="text-[12px] font-semibold tracking-[0.14em] text-white/50">LATEST</div>
          <div class="mt-4 space-y-3 text-[14px] font-semibold tracking-[-0.01em]">
            <a href="/portfolio" class="block text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25">
              Latest Portfolio
            </a>
            <a href="/blog" class="block text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25">
              Latest Blog Posts
            </a>
          </div>
        </div>

        <!-- Legal -->
        <div>
          <div class="text-[12px] font-semibold tracking-[0.14em] text-white/50">LEGAL</div>
          <div class="mt-4 space-y-3 text-[14px] font-semibold tracking-[-0.01em]">
            <a href="/privacy" class="block text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25">
              Privacy Policy
            </a>
            <a href="/terms" class="block text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="md:w-[280px]">
        <div class="flex rounded-xl items-center justify-center border border-white/10 bg-white/5">
          <!-- Socials -->
          <div class="flex gap-2 px-9 py-5">
              <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            class="rounded-lg p-2 text-white/70 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25"
            aria-label="Instagram"
            title="Instagram"
          >
            <Instagram class="h-5 w-5" />
          </a>

          <a
            href="https://linkedin.com/in/mohammad-mahdi-abedi/"
            target="_blank"
            rel="noreferrer"
            class="rounded-lg p-2 text-white/70 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin class="h-5 w-5" />
          </a>

          <a
            href="https://github.com/mo23hammad"
            target="_blank"
            rel="noreferrer"
            class="rounded-lg p-2 text-white/70 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github class="h-5 w-5" />
          </a>

          <a
            href="https://youtube.com/@yourhandle"
            target="_blank"
            rel="noreferrer"
            class="rounded-lg p-2 text-white/70 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25"
            aria-label="YouTube"
            title="YouTube"
          >
            <Youtube class="h-5 w-5" />
          </a>
        </div>
        </div>
      </div>
    </div>

    <!-- Bottom row -->
    <div class="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
      <div class="text-[13px] tracking-[-0.01em] text-white/50">
        © {new Date().getFullYear()} Maral. All rights reserved.
      </div>

      <div class="text-[13px] tracking-[-0.01em] text-white/50">
        Built in Dubai, UAE.
      </div>
    </div>
  </div>
</footer>


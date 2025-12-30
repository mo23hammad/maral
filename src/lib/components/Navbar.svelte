

<script lang="ts">
  import { page } from '$app/state';
</script>

<nav class="border-b border-slate-200">
  <div class="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
    <a href="/" class="font-semibold tracking-tight">Maral</a>

    <div class="flex gap-4 text-sm">
      <a href="/about" class:underline={page.url.pathname === '/about'}>About</a>
      <a href="/services" class:underline={page.url.pathname === '/services'}>Services</a>
      <a href="/portfolio" class:underline={page.url.pathname === '/portfolio'}>Portfolio</a>
      <a href="/contact" class:underline={page.url.pathname === '/contact'}>Contact</a>
    </div>
  </div>
</nav>


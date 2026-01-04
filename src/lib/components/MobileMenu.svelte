

<script lang="ts">
  import { page } from '$app/stores';
  import { onDestroy } from 'svelte';

  let open = $state(false);

  const links = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string, href: string) =>
    href === '/' ? path === '/' : path === href || path.startsWith(href + '/');

  function close() {
    open = false;
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') close();
  }

  // Prevent background scroll when menu open (Svelte 5)
  $effect(() => {
    if (typeof document === 'undefined') return;

    document.documentElement.style.overflow = open ? 'hidden' : '';

    // cleanup for this effect
    return () => {
      document.documentElement.style.overflow = '';
    };
  });

  // Optional: if you still want a hard cleanup on component destroy
  onDestroy(() => {
    if (typeof document !== 'undefined') document.documentElement.style.overflow = '';
  });
</script>

<!-- Top nav (mobile) -->
<nav class="sticky md:hidden top-0 z-50 border-b border-black/10 bg-[#F7F7F7]/80 backdrop-blur">
  <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
    <!-- Brand -->
    <a href="/" class="inline-flex items-center gap-3">
      <span class="h-7 w-7 rounded-md border border-black/15 bg-white"></span>
      <span class="font-['Space_Grotesk'] text-[16px] font-semibold tracking-[-0.02em] text-[#0B0D10]">
        Maral
      </span>
    </a>

    <!-- Right actions -->
    <div class="flex items-center gap-2">
      <a
        href="/contact"
        class="hidden sm:inline-flex items-center justify-center rounded-full bg-[#0B0D10] px-4 py-2 text-[14px] font-semibold tracking-[-0.01em] text-white transition
               hover:-translate-y-[1px] hover:shadow-[0_10px_30px_rgba(11,13,16,0.12)]
               focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/25 active:translate-y-0 active:scale-[0.98]"
      >
        Get a quote
      </a>

      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        on:click={() => (open = !open)}
        on:keydown={onKeydown}
        class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-[#0B0D10] transition
               hover:border-black/25 hover:bg-black/5
               focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20 active:scale-[0.98]"
      >
        <!-- Minimal hamburger -->
        <span class="sr-only">Menu</span>
        <span class="grid gap-1.5">
          <span class="block h-[2px] w-5 bg-[#0B0D10]"></span>
          <span class="block h-[2px] w-5 bg-[#0B0D10]"></span>
          <span class="block h-[2px] w-5 bg-[#0B0D10]"></span>
        </span>
      </button>
    </div>
  </div>

  <!-- Backdrop + Panel -->
  {#if open}
    <!-- Backdrop -->
    <button
      type="button"
      class="fixed inset-0 z-40 cursor-default bg-black/30 backdrop-blur-[2px]"
      aria-label="Close menu"
      on:click={close}
      on:keydown={onKeydown}
    ></button>

    <!-- Panel -->
    <div
      id="mobile-menu"
      class="fixed left-0 right-0 top-[64px] z-50 mx-auto w-full max-w-6xl px-4"
      on:keydown={onKeydown}
    >
      <div class="rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(11,13,16,0.18)]">
        <div class="p-4">
          <!-- Links -->
          <div class="grid gap-1">
            {#each links as link}
              {@const active = isActive($page.url.pathname, link.href)}
              <a
                href={link.href}
                aria-current={active ? 'page' : undefined}
                on:click={close}
                class={[
                  'flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold tracking-[-0.01em] transition',
                  'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20',
                  active ? 'bg-black/5 text-[#0B0D10]' : 'text-[#0B0D10]/85 hover:bg-black/5 hover:text-[#0B0D10]'
                ].join(' ')}
              >
                <span class="font-['Space_Grotesk']">{link.label}</span>
                <span class={active ? 'text-[#3B82F6]' : 'text-[#0B0D10]/40'}>→</span>
              </a>
            {/each}
          </div>

          <!-- Divider -->
          <div class="my-4 h-px bg-black/10"></div>

          <!-- CTA -->
          <a
            href="/contact"
            on:click={close}
            class="inline-flex w-full items-center justify-center rounded-full bg-[#3B82F6] px-4 py-3 text-[14px] font-semibold tracking-[-0.01em] text-white transition
                   hover:-translate-y-[1px] hover:brightness-95 hover:shadow-[0_10px_30px_rgba(59,130,246,0.20)]
                   focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/30 active:translate-y-0 active:scale-[0.98]"
          >
            Get a quote
          </a>

          <!-- Contact quick info -->
          <div class="mt-4 grid gap-2 text-[13px] font-semibold tracking-[-0.01em] text-[#0B0D10]/70">
            <a href="mailto:you@example.com" class="rounded-lg px-2 py-2 transition hover:bg-black/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20">
              you@example.com
            </a>
            <a href="tel:+971000000000" class="rounded-lg px-2 py-2 transition hover:bg-black/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20">
              +971 00 000 0000
            </a>
            <div class="px-2 py-1 text-[#0B0D10]/50">Dubai, UAE</div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</nav>

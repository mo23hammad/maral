




<script lang="ts">
  import { page } from '$app/stores';

  const src= "/logo.png";

  const links = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string, href: string) =>
    href === '/'
      ? path === '/'
      : path === href || path.startsWith(href + '/');
</script>


<nav class="sticky top-0 z-50 hidden border-b border-black/10 bg-[#F7F7F7]/80 backdrop-blur md:block">
  <div class="mx-auto flex w-full items-center px-4 py-4">
    <!-- Left: Brand -->
    <div class="flex flex-1 justify-start">
      <a href="/" class="ml-10 inline-flex items-center gap-3">
        <img class="w-10 h-10 rounded-md" alt="logo" {src} />
        <span class="font-['Space_Grotesk'] text-[16px] font-semibold tracking-[-0.02em] text-[#0B0D10]">
          MARAL
        </span>
      </a>
    </div>

    <!-- Center: Links -->
    <div class="flex flex-1 justify-center">
      <div class="flex items-center gap-2 text-[14px] font-semibold tracking-[-0.01em]">
        {#each links as link}
          {@const active = isActive($page.url.pathname, link.href)}
          <a
            href={link.href}
            aria-current={active ? 'page' : undefined}
            class={[
              'group relative rounded-lg px-3 py-2 transition',
              'hover:bg-black/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/20',
              active ? 'text-[#0B0D10]' : 'text-[#0B0D10]/80 hover:text-[#0B0D10]'
            ].join(' ')}
          >
            {link.label}
            <span
              class={[
                'pointer-events-none absolute left-3 right-3 -bottom-[2px] h-px origin-left bg-black/60 transition-transform duration-200 ease-out',
                active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              ].join(' ')}
            ></span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Right: CTA (match brand spacing) -->
    <div class="flex flex-1 justify-end">
      <button class="btn-primary mr-10">
        Book a 15-min call
      </button>
    </div>
  </div>
</nav>


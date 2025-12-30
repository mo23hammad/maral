<script lang="ts">
  // "default" = normal pages
  // "wide" = sections that need extra width (gallery/portfolio)
  // "prose" = long text readability (blog/about)
  let { size = 'default' } = $props<{
    size?: 'default' | 'wide' | 'prose';
  }>();

  const sizes = {
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
    prose: 'max-w-3xl'
  };
</script>

<div class={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizes[size]}`}>
  <slot />
</div>

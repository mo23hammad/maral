<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import "../layout.css";
	import MobileMenu from '$lib/components/MobileMenu.svelte';
    import { onMount } from 'svelte';
    import Lenis from 'lenis';
	let { children } = $props();


      onMount(() => {
        const lenis = new Lenis({
          duration: 1,              // longer = smoother
          smoothWheel: true,
          smoothTouch: false,          // keep native touch feel (usually best)
          wheelMultiplier: 0.9         // slightly softer wheel
        });

        let rafId = 0;
        const raf = (time: number) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => {
          cancelAnimationFrame(rafId);
          lenis.destroy();
        };
      });
</script>
<style>
    @reference "../layout.css";
</style>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen flex flex-col">
  <Navbar />
  <MobileMenu />

  <main class="flex-1 w-full bg-[#F7F7F7]">
    {@render children()} 
  </main>

  <Footer />
</div>

<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Container from '$lib/components/Container.svelte';
    import "../layout.css";
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	let { children } = $props();
</script>
<style>
    @reference "../layout.css";
</style>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen flex flex-col">
  <Navbar />
  <MobileMenu />

  <main class="flex-1 w-full bg-[#F7F7F7]">
    <Container size="w-full">
        {@render children()} 
    </Container> 
  </main>

  <Footer />
</div>

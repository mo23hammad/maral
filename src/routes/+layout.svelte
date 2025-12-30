<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Container from '$lib/components/Container.svelte';

	let { children } = $props();
</script>


<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen flex flex-col">
  <Navbar />

  <main class="flex-1">
    <Container size="prose">
        {@render children()} 
    </Container> 
  </main>

  <Footer />
</div>

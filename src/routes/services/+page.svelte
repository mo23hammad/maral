<script>
    import Hero from "$lib/components/services/Hero.svelte";
	import Packages from "$lib/components/services/Packages.svelte";
    import Howtochoose from "$lib/components/services/Howtochoose.svelte"
	import Detailpackage from "$lib/components/services/Detailpackage.svelte";
    import Modules from "$lib/components/services/Modules.svelte";
	import Retainer from "$lib/components/services/Retainer.svelte";
	import Standards from "$lib/components/services/Standards.svelte";
	import Faq from "$lib/components/services/Faq.svelte";
    import CTA from "$lib/components/services/CTA.svelte";


    let data = $props();
</script>

<Hero />
<Packages />
<Howtochoose />
<Detailpackage />
<Modules />
<Retainer />
<Standards />
<Faq />
<CTA />

<script>
	import Header from '../components/Header.svelte';
	import HeroSection from '../components/HeroSection.svelte';
	import ShippingSection from '../components/ShippingSection.svelte';
	import CategoriesSection from '../components/CategoriesSection.svelte';
</script>

<div class="flex min-h-[100dvh] w-screen items-center flex-col">
	<Header />
	<main class="flex flex-col items-center w-full">
		<HeroSection />
		<ShippingSection />
		<CategoriesSection />
	</main>
</div>

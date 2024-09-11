<script>
	import Waves from './Waves.svelte';
</script>

<div class="w-screen overflow-hidden absolute bottom-0 h-fit flex flex-col justify-end">
	<Waves />
</div>
<section
	class="bg-muted flex max-sm:justify-start max-sm:pt-20 pt-12 items-center min-h-screen justify-center w-full flex-col"
>
	<div
		class=" w-full flex items-center lg:mb-40 max-lg:flex-col px-6 sm:px-8 lg:px-4 justify-around flex-wrap max-w-screen-2xl bg-transparent z-10"
	>
		<div class="flex flex-col gap-4 max-w-lg">
			<h1
				class="text-5xl sm:text-4xl md:text-5xl xl:text-6xl font-bold py-2 tracking-tighter overflow-hidden h-fit leading-tight"
			>
				We are shipping furniture all across Europe
			</h1>
			<p class="max-w-[600px] text-muted-foreground text-lg sm:text-base md:text-lg xl:text-xl">
				Discover our premium furniture collection, carefully curated and shipped directly from
				Europe to your doorstep. Enjoy exceptional quality, timely delivery, and unparalleled
				customer service.
			</p>
		</div>
		<img
			src="images/hero.webp"
			alt="Hero"
			class="block w-3/4 md:max-w-3/4 lg:max-w-1/3 md:max-w-[500px]"
		/>
	</div>
</section>

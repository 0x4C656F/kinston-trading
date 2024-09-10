<script>
	import Waves from './Waves.svelte';
</script>

<section
	class="bg-muted flex items-center overflow-x-hidden min-h-screen justify-center w-full flex-col"
>
	<Waves />
	<div
		class="items-center w-full h-[50vh] flex justify-around max-w-screen-2xl bg-transparent z-10"
	>
		<div class="space-y-4">
			<h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-2xl">
				Furniture Shipped from Europe to Ukraine
			</h1>
			<p
				class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
			>
				Discover our premium furniture collection, carefully curated and shipped directly from
				Europe to your doorstep in Ukraine. Enjoy exceptional quality, timely delivery, and
				unparalleled customer service.
			</p>
		</div>
		<img src="images/hero.webp" alt="Hero" />
	</div>
</section>

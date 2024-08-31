<script>
	import Waves from './Waves.svelte';
</script>

<section class="bg-muted flex items-center min-h-screen justify-center w-full flex-col">
	<Waves />
	<div
		class="  items-center w-full h-[50vh] flex justify-start max-w-screen-2xl bg-transparent z-10"
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
			<div class="flex flex-col gap-2 min-[400px]:flex-row">
				<a
					href="/"
					class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
				>
					Shop Now
				</a>
				<a
					href="/"
					class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
				>
					Learn More
				</a>
			</div>
		</div>
	</div>
</section>

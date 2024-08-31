<script>
	import Icon from '@iconify/svelte';

	const categories = [
		{
			name: 'Lights',
			icon: 'lucide:lamp',
			description: 'Discover our stunning collection of lamps and lighting fixtures.'
		},
		{
			name: 'Sofas',
			icon: 'lucide:sofa',
			description: 'Explore our comfortable and stylish sofa collection.'
		},
		{
			name: 'Coffee Tables',
			icon: 'lucide:table',
			description: 'Elevate your living space with our stylish coffee tables.'
		},
		{
			name: 'TV Stands',
			icon: 'lucide:tv',
			description: 'Find the perfect TV stand to complement your home decor.'
		},
		{
			name: 'Beds',
			icon: 'lucide:bed',
			description: 'Experience comfort and style with our bed collection.'
		}
	];
</script>

<section class="bg-muted py-12 md:py-24 w-full flex items-center rounded-t-[5%] flex-col lg:py-32">
	<div class=" max-w-screen-2xl w-full gap-8 px-4 md:px-6">
		<div class="space-y-4 w-full">
			<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
				Furniture Categories
			</h2>
			<p
				class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
			>
				Explore our extensive collection of high-quality furniture, carefully curated to meet the
				diverse needs of our customers in Ukraine.
			</p>
			<div class="flex flex-wrap w-full gap-4">
				{#each categories as category}
					<a
						class="group flex w-80 flex-col items-start gap-2 rounded-lg bg-background p-4 transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
						href="/"
					>
						<img
							src="/images/placeholder.svg"
							width="300"
							height="300"
							alt={category.name}
							class="aspect-square object-cover rounded-lg"
						/>
						<div class="flex flex-col items-start gap-1">
							<Icon icon={category.icon} class="h-8 w-8 text-primary" />
							<h3 class="text-lg font-semibold group-hover:underline">{category.name}</h3>
							<p class="text-muted-foreground">{category.description}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

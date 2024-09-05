<script lang="ts">
	import Icon from '@iconify/svelte';
	import { categories } from '$lib/constants';
	const capitalize = (s: string) => {
		return s[0].toUpperCase() + s.slice(1);
	};
</script>

<section class="bg-muted py-12 md:py-24 w-full flex items-center rounded-t-[5%] flex-col lg:py-32">
	<div class=" max-w-screen-2xl w-full gap-8 px-4 md:px-6">
		<div class=" w-full flex flex-col gap-4">
			<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Categories</h2>
			<p
				class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
			>
				Explore our extensive collection of high-quality furniture, carefully curated to meet the
				diverse needs of our customers in Ukraine.
			</p>
			<div class="flex mt-10 flex-col w-full gap-12">
				{#each categories as category}
					<section class="flex flex-col gap-4">
						<div class="flex items-center p-1 w-full justify-between">
							<a
								href={'/categories' + category.href}
								class="flex gap-1 text-3xl items-center group"
							>
								<Icon icon={category.icon}></Icon>
								<h2
									class=" font-semibold group-hover:underline group-hover:translate-x-2 transition-transform"
								>
									{capitalize(category.name)}
								</h2>
								<Icon
									icon="mdi:arrow-right-thin"
									class="group-hover:translate-x-2 transition-transform"
								/>
							</a>
						</div>
						<div class="flex relative gap-2 bg-gradient-to-l to-background">
							{#each category.products as src}
								<img
									{src}
									width="200"
									height="200"
									alt={src}
									class="aspect-square shadow-lg object-cover rounded-lg p-4 bg-background"
								/>
							{/each}
						</div>
					</section>
				{/each}
			</div>
		</div>
	</div>
</section>

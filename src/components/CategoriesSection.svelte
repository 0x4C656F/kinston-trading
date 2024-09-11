<script lang="ts">
	import Icon from '@iconify/svelte';
	import { categories } from '$lib/constants';
	const capitalize = (s: string) => {
		return s[0].toUpperCase() + s.slice(1);
	};
</script>

<section
	class="bg-muted py-8 sm:py-12 md:py-16 lg:py-24 w-full flex items-center rounded-t-[5%] flex-col"
>
	<div class="max-w-screen-2xl w-full gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
		<div class="w-full flex flex-col gap-3 sm:gap-4">
			<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
				Categories
			</h2>
			<p class="max-w-[600px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">
				Explore our extensive collection of high-quality furniture, carefully curated to meet the
				diverse needs of our customers in Ukraine.
			</p>
			<div class="flex mt-6 sm:mt-8 md:mt-10 flex-col w-full gap-8 sm:gap-10 md:gap-12">
				{#each categories as category}
					<section class="flex flex-col gap-3 sm:gap-4">
						<div class="flex items-center p-1 w-full justify-between">
							<a
								href={'/categories' + category.href}
								class="flex gap-1 text-xl sm:text-2xl md:text-3xl items-center group"
							>
								<Icon icon={category.icon} class="text-2xl sm:text-3xl md:text-4xl" />
								<h2
									class="font-semibold group-hover:underline group-hover:translate-x-2 transition-transform"
								>
									{capitalize(category.name)}
								</h2>
								<Icon
									icon="mdi:arrow-right-thin"
									class="group-hover:translate-x-2 transition-transform"
								/>
							</a>
						</div>
						<div
							class="flex flex-wrap justify-start gap-2 sm:gap-3 md:gap-4 bg-gradient-to-l to-background"
						>
							{#each category.products as src}
								<img
									{src}
									width="200"
									height="200"
									alt={src}
									class="w-[calc(50%-0.5rem)] sm:w-[calc(33.33%-0.67rem)] md:w-[calc(25%-0.75rem)] lg:w-[200px] aspect-square shadow-lg object-cover rounded-lg p-2 sm:p-3 md:p-4 bg-background"
								/>
							{/each}
						</div>
					</section>
				{/each}
			</div>
		</div>
	</div>
</section>


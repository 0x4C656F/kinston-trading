<script lang="ts">
	import Icon from '@iconify/svelte';

	const { data: category } = $props();

	const groupedProviders = $derived(() => {
		return category.providers.reduce(
			(acc, provider) => {
				if (!acc[provider.country]) {
					acc[provider.country] = [];
				}
				// Push the provider object including name, country, and icon
				acc[provider.country].push({
					name: provider.name,
					country: provider.country,
					icon: provider.icon
				});
				return acc;
			},
			{} as Record<string, Array<{ name: string; country: string; icon: string }>>
		);
	});
</script>

<div class="flex items-center mt-20 justify-center min-h-screen w-full max-w-screen-2xl">
	<div class="min-h-screen p-8 w-full">
		<a href="/" class="text-slate-500">{'<- Back'}</a>
		<h1 class="text-4xl font-bold text-center mb-8 text-foreground">
			Companies that provide "{category.name}" products
		</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each Object.entries(groupedProviders()) as [country, providers]}
				<div class="bg-background rounded-lg shadow-lg overflow-hidden">
					<div class="bg-primary text-background p-4 flex items-center justify-between">
						<h2 class="text-xl font-semibold">{country}</h2>
						<Icon icon={providers[0].icon} class="h-6 w-6 " />
					</div>
					<ul class="divide-y divide-muted">
						{#each providers as provider}
							<li class="p-4 hover:bg-muted transition-colors duration-150">
								<div class="flex items-center space-x-3">
									<Icon icon="mdi:building" class="h-5 w-5 " />
									<span class="text-foreground">{provider.name}</span>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</div>

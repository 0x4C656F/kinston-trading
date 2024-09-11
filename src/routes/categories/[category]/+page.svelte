<script lang="ts">
	import Icon from '@iconify/svelte';
	const { data: category } = $props();
</script>

<div class="absolute h-full overflow-hidden left-0 top-0 -z-10 flex flex-wrap">
	<img
		src={`/images/bg/${category.name[0]}/t.webp`}
		class="w-screen h-full blur-[2px] object-cover"
		alt="background"
	/>
</div>

<div class="flex flex-col pt-40 box-border min-h-screen w-screen max-w-screen-2xl px-4 md:px-6">
	<div
		style={'overflow: hidden'}
		class="flex flex-wrap max-md:my-4 gap-2 lg:gap-10 items-center h-fit"
	>
		<a
			href="/"
			class="text-slate-100 hover:bg-transparent transition-all duration-150 bg-foreground bg-opacity-80 text-lg w-fit px-2 py-1 rounded"
			>{'<- Back'}</a
		>
		<h1 class="py-2 text-4xl md:text-5xl font-extrabold mt-8 mb-8 text-white text-shadow-lg">
			Companies that provide "{category.name}" products
		</h1>
	</div>
	<ul
		class="rounded-md backdrop-blur-sm w-full overflow-visible h-fit md:w-fit bg-black bg-opacity-80 p-2 md:p-4"
	>
		{#each category.providers as provider}
			<li
				class="py-2 h-fit flex items-center overflow-visible pl-2 hover:bg-foreground rounded gap-2 hover:bg-opacity-100 transition-colors duration-150"
			>
				<Icon icon={provider.icon} class="h-5 w-5 text-white" />
				<span class="text-white text-lg sm:text-xl md:text-2xl">{provider.name}</span>
			</li>
		{/each}
	</ul>
</div>

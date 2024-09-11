<script lang="ts">
	import Icon from '@iconify/svelte';
	const { data: category } = $props();
</script>

<div class="absolute h-full overflow-hidden left-0 top-0 -z-10 flex flex-wrap">
	<img
		src={`/images/bg/${category.name[0]}/t.webp`}
		class="w-screen h-full blur-sm object-cover"
		alt="background"
	/>
</div>

<div
	class="flex flex-col m-0 py-40 overflow-hidden box-border h-screen w-screen max-w-screen-2xl px-4 md:px-6"
>
	<div class="flex flex-wrap max-md:my-4 gap-10 items-center py-1">
		<a
			href="/"
			class="text-slate-100 hover:bg-transparent transition-all duration-150 bg-foreground bg-opacity-80 text-lg w-fit px-2 py-1 rounded"
			>{'<- Back'}</a
		>
		<h1
			class="text-3xl py-2 sm:text-4xl md:text-5xl font-extrabold mt-8 mb-8 text-white text-shadow-lg"
		>
			Companies that provide "{category.name}" products
		</h1>
	</div>
	<ul class="rounded-md backdrop-blur-sm w-full md:w-fit bg-black bg-opacity-80 p-4">
		{#each category.providers as provider}
			<li
				class="py-2 pl-2 hover:bg-foreground rounded hover:bg-opacity-100 transition-colors duration-150"
			>
				<div class="flex items-center space-x-4">
					<Icon icon={provider.icon} class="h-5 w-5 text-white" />
					<span class="text-white text-lg sm:text-xl md:text-2xl">{provider.name}</span>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.text-shadow-lg {
		text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
	}
</style>

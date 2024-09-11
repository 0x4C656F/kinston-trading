<script lang="ts">
	import Icon from '@iconify/svelte';
	import { categories } from '$lib/constants';
	const capitalize = (s: string) => {
		return s[0].toUpperCase() + s.slice(1);
	};
</script>

<main class="w-screen h-fit rounded-t-[15vw] md:rounded-t-[5vw] overflow-hidden">
	{#each categories as category}
		<a
			href={'/categories' + category.href}
			class={`flex relative -mt-10  lg:-mb-20 h-screen rounded-t-[15vw]  overflow-hidden w-full border-t-4  box-border flex-col md:rounded-t-[5vw] items-center justify-center `}
		>
			<img src={category.src} alt={category.name} class="absolute min-w-[1920px] -z-10" />
			<div
				class="flex gap-1 text-black text-6xl sm:text-7xl md:text-9xl font-bold p-3 overflow-hidden z-10 h-fit items-center group"
			>
				<Icon icon={category.icon} />

				<h2
					class="hover:underline w-fit overflow-visible text-shadow-white-lg group-hover:translate-x-2 h-fit py-2 transition-transform"
				>
					{capitalize(category.name)}
				</h2>
			</div>
		</a>
	{/each}
</main>

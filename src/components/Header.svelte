<script>
	import Icon from '@iconify/svelte';
</script>

<header
	class="fixed rounded-b-lg w-screen z-50 bg-white/80 px-4 flex justify-between items-center h-12 backdrop-blur-sm shadow-sm"
>
	<div class="flex items-center justify-between w-full max-w-screen-2xl mx-auto">
		<a href="/" class="flex items-center gap-2">
			<Icon icon="lucide:truck" class="h-8 w-8 max-md:hidden text-primary" />
			<span class="text-xl max-sm:text-base font-semibold text-foreground">Kins West Trading</span>
		</a>
		<div class="gap-3 flex w-fit items-center max-sm:flex-col max-sm:gap-1 max-sm:text-xs">
			<p>+380955481839</p>
			<div class="max-sm:h-[1px] max-sm:w-8 h-6 bg-black w-[1px]"></div>

			<p>KingsWestTrading@gmail.com</p>
		</div>
	</div>
</header>

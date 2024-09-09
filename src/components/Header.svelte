<script>
	import Icon from '@iconify/svelte';
</script>

<header
	class="fixed rounded-b-lg w-screen z-50 bg-white bg-opacity-80 flex justify-between items-center h-12 backdrop-blur-sm shadow-sm"
>
	<div class="flex items-center justify-between w-full max-w-screen-2xl mx-auto">
		<a href="/" class="flex items-center space-x-2">
			<Icon icon="lucide:truck" class="h-8 w-8 text-primary" />
			<span class="text-xl font-semibold text-foreground">Kins West Trading</span>
		</a>
		<nav class="hidden md:flex space-x-8">
			<a
				href="/about"
				class="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
				>About Us</a
			>
			<a
				href="/services"
				class="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
				>Services</a
			>
			<a
				href="/contact"
				class="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
				>Contact</a
			>
		</nav>
		<div class="md:hidden">
			<button type="button" class="text-foreground hover:text-primary focus:outline-none">
				<Icon icon="lucide:menu" class="h-6 w-6" />
			</button>
		</div>
	</div>
</header>

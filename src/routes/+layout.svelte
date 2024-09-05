<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	const { children } = $props();
</script>

<div class="flex font-sans min-h-[100dvh] w-screen items-center flex-col">
	<Header />
	{@render children()}
</div>

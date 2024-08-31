<script lang="ts">
	import '../app.css';
	const { children } = $props();
</script>

<div class="font-sans">
	{@render children()}
</div>

<script lang="ts">
	import { initClient } from '$lib/aleo';
	import { onMount } from 'svelte';
	onMount(() => {
		initClient();
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

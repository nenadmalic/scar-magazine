<script>
	export let data;
</script>

{#each data.content as con}
	<h1>{con.content_title}</h1>
	<div>{@html con.content_text}</div>
{/each}
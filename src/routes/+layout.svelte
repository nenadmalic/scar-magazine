<script>
  import ContentAds from './ContentAds.svelte';
  import ContentLatestNews from './ContentLatestNews.svelte';

  export let data;

  const ads = data.props.ads;  
</script>

<nav>
	<a href="/">home</a>
    <a href="/">music</a>
	<a href="/">about</a>
    <a href="/">admin</a>
    <a href="/">submit</a>
</nav>

<div class="layoutGrid">
    <div>
        <ContentAds {data} />

        {#each ads as a}
            <p>{a.content_title}</p>    
        {/each}
    </div>
    <div>
        <slot></slot>
    </div>
    <div>
        <ContentLatestNews {data} />
    </div>
</div>

<footer>
    <p>Footer text</p>
</footer>

<style>
/*
    Old layout was 200px x 360px x 300px, with central column padding: 0 120px 0 20px.
    Total width was 1000px, i.e 20% 50% 30%
*/

.layoutGrid {
        display: grid;
        grid-template-columns: 20% 50% 30%;
        /* column-gap: 10px; */
        padding:0;
        }

    .layoutGrid > div:nth-of-type(2) {
        padding: 0 120px 0 20px;
        }
    .layoutGrid > div:nth-of-type(1){
        min-width: 200px;
        }
</style>
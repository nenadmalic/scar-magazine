<script>
  import Navigation from './Nav.svelte';
  import LatestNews from './LatestNews.svelte';
  import LatestReviews from './LatestReviews.svelte';
  import ContentAds from './ContentAds.svelte';

  export let data;

  const ads = data.props.ads;  
</script>

<Navigation />

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
        <LatestNews {data} />

        <LatestReviews {data} />

        <h3>Old nav</h3>
        <ul>
            <li><a href="https://vms.hr/scarskin/index.php">Novosti</a></li>
            <li><a href="https://vms.hr/scarskin/hr/glazba/index.php">Glazba</a></li>
            <li><a href="https://vms.hr/scarskin/hr/dogadaji/index.php">Dogadaji</a></li>
            <li><a href="https://vms.hr/scarskin/hr/film/index.php">Film</a></li>
            <li><a href="https://vms.hr/scarskin/hr/razgovor/index.php">Razgovor</a></li>
            <li><a href="https://vms.hr/scarskin/hr/isplata.htm">Jel' se isplatilo?</a></li>
        </ul>
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
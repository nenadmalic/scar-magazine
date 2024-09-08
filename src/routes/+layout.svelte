<script>
  import Navigation from './Nav.svelte';
  import AboveTheFold from './AboveTheFold.svelte';
  import SectionFrontpageNews from './backstage/SectionFrontpageNews.svelte';
  import SectionInterviews from './SectionInterviews.svelte';
  import SectionReviews from './SectionReviews.svelte';
  import LatestNews from './LatestNews.svelte';
  import LatestReviews from './LatestReviews.svelte';
  import ContentAds from './ContentAds.svelte';
  import Grid from './GridLayoutBootstrap.svelte';

  export let data;

  const ads = data.props.ads;  
</script>


<Navigation />
<AboveTheFold />
<SectionFrontpageNews />
<SectionInterviews />
<SectionReviews />


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
:global(html) {
  font-size: 16px; /* Base font size */
}

:global(body) {
  font-size: 1rem;
  background-color: black;
  border: 1rem solid white;
}

:global(h2) {
    font-size: 1rem;
    color: #f5f5f5;
    font-weight: 400;
    line-height: 28px;
}
:global(datetime) {
    color: #656565;
}
:global(img) {
    width: 100%;
    height: auto;
    object-fit: cover;
}

:global(hr) {
    width: 33px;
    border: 2px solid #FECB00;
    margin: 0 auto 1rem 0;
}
:global(p:first-of-type) {
    color: #FECB00;
}
:global(.country-flag) {
        width: 1.5rem;
        height: auto; /* maintain aspect ratio */
        flex-shrink: 0; /* prevent shrinking in flex containers */
    }

/*
:global(p) {
    font-size: 1rem;
    font-weight: 100;
    color: #a5a5a5;
    line-height: 24px;
}
*/
@media screen and (max-width: 320px) {
  :global(html) {
    font-size: 1.25 rem; /* Smaller font size for very small screens */
  }
}

@media screen and (min-width: 321px) and (max-width: 768px) {
  :global(html) {
    font-size: 1.25 rem; /* Slightly larger font size for small to medium screens */
  }
}

@media screen and (min-width: 769px) {
  :global(html) {
    font-size: 1 rem; /* Original font size for larger screens */
  }
}
</style>
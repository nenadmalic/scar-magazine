<script>
  import Navigation from './Nav.svelte';
  import LatestNews from './ScarskinLatestNews.svelte';
  import LatestReviews from './ScarskinLatestReviews.svelte';
  import ContentAds from './ScarskinContentAds.svelte';

  export let data;

  const ads = data.props.ads;  
</script>

<Navigation />

<slot></slot>

<div class="layoutGrid">
    <div style="width: 200px;">
        <ContentAds {data} />

        {#each ads as a}
            <p>{a.content_title}</p>    
        {/each}
    </div>
    <div>
        
    </div>
    <div style="width: 550px;">
        <LatestNews {data} />
        <LatestReviews {data} />
    </div>
</div>

<footer>
    <p>Footer text</p>
</footer>

<style>
:global(html) {
  font-size: 16px; /* Base font size */
}

:global(body) {
  font-size: 1rem;
  background-color: white;
  border: 1rem solid white;
}

:global(h2) {
    font-size: 1rem;
    color: #f5f5f5;
    font-weight: 400;
    line-height: 28px;
}
:global(a) {
    text-decoration: none;
}
:global(a:hover hr) {
    width: 100%;
    transition: width 0.3s ease-in-out;
}

:global(a hr) {
    width: 33px;
    transition: width 0.3s ease-in-out;
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
    border-top: 2px solid #FECB00;
    margin: 0 auto 1rem 0;
    opacity: 100%;
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
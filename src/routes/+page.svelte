<script>
  import AboveTheFold from './AboveTheFold.svelte';
  import SectionFrontpageNews from './SectionNews.svelte';
  import SectionHeader from './SectionHeader.svelte';
  import SectionInterviews from './SectionInterviews.svelte';
  import SectionReviews from './SectionReviews.svelte';
  import SectionEvents from './SectionEvents.svelte';
  import SectionMovies from './SectionMovies.svelte';
</script>

<AboveTheFold />
<SectionFrontpageNews />

<SectionHeader 
  title="Events"
  latestContent="Latest events: Rammstein's pyrotechnic-filled stadium tour electrifies fans across Europe with sold-out shows."
/>

<SectionInterviews />
<SectionReviews />
<SectionEvents />
<SectionMovies />

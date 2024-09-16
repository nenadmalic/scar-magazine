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
    title="Interviews"
    latestContent="Moonspell – Portuguese dark metal pioneers discuss their haunting &quot;Memorial&quot; album, creative evolution, and the vibrant Portuguese underground scene."
/>

<SectionInterviews />

<SectionHeader 
    title="Reviews"
    latestContent="Latest review: Angelcorpse – Brutal riffs, haunting melodies, and relentless drumming define this new release."
/>

<SectionReviews />

<SectionHeader 
  title="Events"
  latestContent="Latest events: Rammstein's pyrotechnic-filled stadium tour electrifies fans across Europe with sold-out shows."
/>

<SectionEvents />

<SectionHeader 
    title="Movies"
    latestContent="'Zombie Apocalypse Now' breaks box office records. Director promises more undead action in upcoming sequel."
/>

<SectionMovies />

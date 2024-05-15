<script>
  export let data;
  const news = data.props.news;
  // console.log('Fetched news:', news);  // Debug log to check fetched data
</script>

{#each news as n}
  <article>
  <h2>
      <a href="{n.content_id}">{n.content_title}</a>
      <!-- {n.content_title.replace(/\s+/g, '-')} // if you want to add title as url and replace its whitespace with dashes-->
  </h2>
  <div><strong>{n.content_category}</strong></div>
  <div>{@html n.content_text}</div>
  <div>Article ID: {n.content_id}</div>
  </article>
  <hr/>
{/each}
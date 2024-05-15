<script>
  export let data;
  const ads = data.props.ads;
</script>

{#each ads as item (item.content_id)}
  <div class="content-ad">
    <a href="{item.content_id}">
<!--     <a href="{item.content_category.toLowerCase()}/{item.content_id}"> --> 
      <img src={item.content_add_image_url}
          alt={item.content_add_image_alt_text}
          class="content-ad-image"
          title={item.content_add_image_title}>
      </a>
    <br />
    {item.content_title}
  </div>
{/each}


<!-- // static version of the content ad //

<div class="content-ad">
    <a href="./">
        <img src="https://www.vms.hr/scarskin/media/mastodon/100bloodmountain.png"
            alt="Mastodon naslovnica"
            class="content-ad-image"
            title="Mastodon: &quot;Blood Mountain&quot; izvještaj">
        </a>
    <br />
    Mastodon - korak&nbsp;unaprijed&nbsp;s "Blood Mountain"-om
</div>
-->
<style>
    .content-ad {
        margin:0 20%
    }
    .content-ad-image {
        width: 60%;
    }
</style>
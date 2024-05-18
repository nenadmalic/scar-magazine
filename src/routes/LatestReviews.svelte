<script>
    export let data;
    const latestReviews = data.props.latestReviews;
</script>
  
    <table class="content-list-frontpage">
        <thead>
            <tr>
                <th>Nedavno objavljeni izvjestaji</th>
                <th>Datum</th>
            </tr>
        </thead>
        <tbody>
            {#each latestReviews as r}
            <tr>
                <td>
                    <a href="{r.content_id}">
                        {r.content_title}
                    </a>
                </td>
                <td>
                    {r.content_published_at}
                </td>
            </tr>
            {/each}
        </tbody>
    </table>
  
  <style>
        .content-list-frontpage {
            width: 100%;
            }
        a {
            color: #000;
            text-decoration: none;
            }
        a:hover {
            color: #f00;
            }
  </style>
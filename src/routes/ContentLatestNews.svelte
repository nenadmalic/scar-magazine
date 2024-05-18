<script>
    export let data;
    const latestNews = data.props.latestNews;
</script>
  
    <table class="content-list-frontpage">
        <thead>
            <tr>
                <th>Objavljeni izvještaji</th>
                <th>Datum</th>
            </tr>
        </thead>
        <tbody>
            {#each latestNews as n}
            <tr>
                <td>
                    <a href="{n.content_id}">
                        {n.content_title}
                    </a>
                </td>
                <td>
                    {n.content_published_at}
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
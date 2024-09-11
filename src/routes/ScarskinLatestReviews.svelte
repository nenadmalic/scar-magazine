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

    <h3>Old nav</h3>
    <ul>
        <li><a href="https://vms.hr/scarskin/index.php">Novosti</a></li>
        <li><a href="https://vms.hr/scarskin/hr/glazba/index.php">Glazba</a></li>
        <li><a href="https://vms.hr/scarskin/hr/dogadaji/index.php">Dogadaji</a></li>
        <li><a href="https://vms.hr/scarskin/hr/film/index.php">Film</a></li>
        <li><a href="https://vms.hr/scarskin/hr/razgovor/index.php">Razgovor</a></li>
        <li><a href="https://vms.hr/scarskin/hr/isplata.htm">Jel' se isplatilo?</a></li>
    </ul>
  
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
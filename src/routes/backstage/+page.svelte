<form>
    <div>
      <label>Title:
        <input id="title" type="text" required />
      </label>
    </div>
    <div>
      <label for="sefTitle">SEF Title:
        <input id="sefTitle" type="text" required />
      </label>
    </div>
    <div>
      <label for="author">Author:
        <select id="author" required>
          <option value="1">Nenad</option>
          <option value="2">Matija</option>
        </select>
      </label>
    </div>
    <div>
      <label>Category:
        <select id="category" required>
          <option value="Glazba">Glazba</option>
          <option value="Novost">Novost</option>
        </select>
      </label>
    </div>
    <div>
      <label>Text:
        <textarea id="text" required></textarea>
      </label>
    </div>
    <div>
      <label>Tag Name:
        <input id="tagName" type="text" required />
      </label>
    </div>
    <button type="submit">Send</button>
  </form>


<!--
<form on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="title">Title:</label>
      <input id="title" type="text" bind:value={title} on:input={handleTitleChange} required />
    </div>
    <div>
      <label for="sefTitle">SEF Title:</label>
      <input id="sefTitle" type="text" bind:value={sefTitle} readonly />
    </div>
    <div>
      <label for="author">Author:</label>
      <select id="author" bind:value={authorId} required>
        {#each authors as author}
          <option value={author.id}>{author.name}</option>
        {/each}
      </select>
    </div>
    <div>
      <label for="category">Category:</label>
      <select id="category" bind:value={category} required>
        {#each categories as categoryOption}
          <option value={categoryOption}>{categoryOption}</option>
        {/each}
      </select>
    </div>
    <div>
      <label for="text">Text:</label>
      <textarea id="text" bind:value={text} required></textarea>
    </div>
    <div>
      <label for="tagName">Tag Name:</label>
      <input id="tagName" type="text" bind:value={tagName} required />
    </div>
    <button type="submit">Send</button>
  </form>
  -->

  <style>
    label {
        clear: both;
    }
    input, select, textarea {
        display: block;
        margin: 0 0 1rem;
        min-width: 20rem;
    }
    input, select {
        height: 2rem;
    }
    textarea {
        height: 30rem
    }

  </style>
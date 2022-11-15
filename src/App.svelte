<script lang="ts">
    import Entry from "./Entry.svelte";
import { getEntries } from "./state";



  const entries = getEntries()
 
</script>

<div>
  <ul>
    {#each $entries as entry}
      <Entry {entry} />
    {/each}
  </ul>
</div>

<style>
</style>

<script lang="ts">
    import { getEntries, type Entry } from "./state";
    import { nanoid } from "nanoid";



    const entries = getEntries()
    let selectedType = ""
    let description = ""

    let selectedEntry = null

    const selectEntry = (entry) => {
        selectedEntry = entry
    }

    const selectType = (type: string) => {
        selectedType = type
    }

    const addToList = () => {
    const newId = nanoid();
    entries.push({ description: description, type: selectedType, id: newId });
    $entries = $entries
  }

  const removeEntry = () => {
    if (selectedEntry != null) {
        selectedEntry.removed = true
        $entries = $entries.filter((e: Entry) => e.removed == false)
    }
  }

</script>
<div class="mb-3">
    Add entry:
    <div class="dropdown">
        <label tabindex="0" class="btn btn-primary m-1">{selectedType != "" ? selectedType : "Select type"}</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a on:click={() => selectType("Love")}>Love</a></li>
            <li><a on:click={() => selectType("Like")}>Like</a></li>
            <li><a on:click={() => selectType("Jokingly")}>Jokingly</a></li>
            <li><a on:click={() => selectType("Dislike")}>Dislike</a></li>
            <li><a on:click={() => selectType("Hate it")}>Hate it</a></li>
        </ul>
    </div>
</div>
<div>
    <input bind:value={description} placeholder="Add description" type="text">
</div>
{#if selectedType != "" && description != ""}
    <button on:click={addToList} class="btn btn-primary mt-3">Add to list</button>
{/if}
<div class="mt-10">
    Remove from list:
    <div class="dropdown">
        <label tabindex="0" class="btn btn-primary m-1">{selectedEntry != null ? selectedEntry.description : "Select entry"}</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            {#each $entries as entry}
                <li><a on:click={() => selectEntry(entry)}>{entry.description}</a></li>
            {/each}
        </ul>
    </div>
    {#if selectedEntry != null}
        <button class="btn btn-primary" on:click={removeEntry}>Remove entry</button>
    {/if}
</div>

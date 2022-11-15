<script lang="ts">
    import type { Entry } from "./state";

    export let entry: Entry

    const entryType = (entry: Entry) => {
        switch(entry.type) {
            case "Love":
                return "./red-heart-icon.svg"
            case "Like":
                return "./like-icon.svg"
            case "Jokingly":
                return "./emoji-tongue-icon.svg"
            case "Dislike":
                return "./dislike-icon.svg"
            case "Hate it":
                return "./danger-icon.svg"
            default:
                return "./like-icon.svg"
        }
    }

    $: icon = entryType(entry)
 
</script>

<li>
    <div class="flex">
        <img src={icon} />
        {entry.description}
    </div>
</li>

<style>
</style>

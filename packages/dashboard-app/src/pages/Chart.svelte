<script>
  import PopulationPyramid from '../components/PopulationPyramid.svelte'

  export let id
</script>

{#if id <= 3}
  <PopulationPyramid />
{:else}
  <h4>Chart loading error</h4>
{/if}

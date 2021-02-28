<script>
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing'
  import Card from '../components/Card.svelte'
  import { store, fetchCharts } from '../stores/charts'

  onMount(() => {
    store.dispatch(fetchCharts())
  })

  const openChart = (chartId) => {
    navigate(`/chart/${chartId}`)
  }
</script>

<main>
  <h1>Hello to Dashboard app!</h1>
  <p>Here you can review some charts examples.</p>
  <section class="cards-list">
    {#each $store.charts as card}
      <Card
        id={card.id}
        title={card.title}
        description={card.description}
        onTitleClick={openChart}
      />
    {:else}
      <p>Loading...</p>
    {/each}
  </section>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .cards-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

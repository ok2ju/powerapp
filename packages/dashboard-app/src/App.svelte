<script>
  import Header from './components/Header.svelte'
  import Card from './components/Card.svelte'

  const cards = [{
    id: 1,
    title: 'Title#1',
    description: 'Description#1'
  }, {
    id: 2,
    title: 'Title#2',
    description: 'Description#2'
  }, {
    id: 3,
    title: 'Title#3',
    description: 'Description#3'
  }, {
    id: 4,
    title: 'Title#4',
    description: 'Description#4'
  }, {
    id: 5,
    title: 'Title#5',
    description: 'Description#5'
  }, {
    id: 6,
    title: 'Title#6',
    description: 'Description#6'
  }]
</script>

<Header />
<main>
  <h1>Hello to Dashboard app!</h1>
  <p>Here you can review some charts examples.</p>
  <section class="cards-list">
    {#each cards as card}
      <Card title={card.title} description={card.description} />
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

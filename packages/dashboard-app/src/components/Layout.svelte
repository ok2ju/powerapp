<script>
  import Header from './Header.svelte'
</script>

<main>
  <Header />
  <slot>
    <h4>Loading content...</h4>
  </slot>
</main>

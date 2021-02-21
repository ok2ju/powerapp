<script>
  import { Router, Route } from 'svelte-routing'
  import Layout from './components/Layout.svelte'
  import Home from './pages/Home.svelte'
  import Chart from './pages/Chart.svelte'
</script>

<Router>
  <Layout>
    <Route path="chart/:id" component="{Chart}" />
    <Route path="/" component={Home} />
  </Layout>
</Router>

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ViewerPage from './pages/Viewer'

ReactDOM.render(
  <Router>
    <Switch>
      <Layout>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/chart/:id/view' component={ViewerPage} />
      </Layout>
    </Switch>
  </Router>,
  document.getElementById('tableau-app')
)

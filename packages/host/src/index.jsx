import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import SettingsPage from './pages/Settings'
import ViewPage from './pages/View'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/settings' />
      </Route>
      <Route exact path='/settings' component={SettingsPage} />
      <Route exact path='/view' component={ViewPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import configureStore from './store'
import SettingsPage from './pages/Settings'
import ViewPage from './pages/View'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/settings' />
        </Route>
        <Route exact path='/settings' component={SettingsPage} />
        <Route exact path='/view' component={ViewPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

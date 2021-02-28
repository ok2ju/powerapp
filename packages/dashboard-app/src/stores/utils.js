import { writable, get } from 'svelte/store'

const compose = (...fns) => {
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

export const applyMiddleware = (middlewares) => (store) => {
  const chain = middlewares.map(middleware => middleware(store))
  return compose(...chain)(store.dispatch)
}

export const createStore = (initialState, reducer, enhancer) => {
  const store = writable(initialState)

  const getState = () => get(store)

  const updater = (action) => {
    store.update(state => reducer(action, state))
  }

  const enhancedDispatch = enhancer({ getState, dispatch: updater })

  const dispatch = (action) => {
    enhancedDispatch(action)
  }

  return { subscribe: store.subscribe, dispatch }
}

export const thunkMiddleware = ({ dispatch }) => (next) => (action) => {
  if (typeof action === 'function') {
    action(dispatch)
  }

  next(action)
}

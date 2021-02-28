import { createStore, applyMiddleware, thunkMiddleware } from './utils'
import chartsAPI from '../api/chart'

export const actions = {
  GET_CHARTS_PENDING: 'GET_CHARTS_PENDING',
  GET_CHARTS_SUCCESS: 'GET_CHARTS_SUCCESS',
  GET_CHARTS_ERROR: 'GET_CHARTS_ERROR'
}

export const fetchCharts = () => {
  return (dispatch) => {
    dispatch({ type: actions.GET_CHARTS_PENDING })

    chartsAPI.list().then((data) => {
      dispatch({ type: actions.GET_CHARTS_SUCCESS, payload: { data } })
    })
  }
}

const initialState = {
  fetching: false,
  charts: [],
  error: null
}

const reducer = (action, state) => {
  switch (action.type) {
    case actions.GET_CHARTS_PENDING:
      return { ...state, fetching: true }
    case actions.GET_CHARTS_SUCCESS:
      return { ...state, charts: action.payload.data, fetching: false }
    case actions.GET_CHARTS_ERROR:
      return { ...state, error: action.payload.error, fetching: false }
    default:
      return state
  }
}

const enhancer = applyMiddleware([thunkMiddleware])

export const store = createStore(initialState, reducer, enhancer)

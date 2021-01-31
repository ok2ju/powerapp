import { ADD_WIDGET, EDIT_WIDGET_FIELD } from '../actions/types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case EDIT_WIDGET_FIELD: {
      const { id, field, value } = action.payload

      return {
        ...state,
        [id]: {
          ...state[id],
          params: {
            ...state[id].params,
            [field]: value
          }
        }
      }
    }
    default:
      return state
  }
}

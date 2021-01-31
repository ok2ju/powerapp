import { ADD_WIDGET, EDIT_WIDGET_FIELD } from './types'

export const addWidget = payload => ({ type: ADD_WIDGET, payload })
export const editWidgetField = payload => ({ type: EDIT_WIDGET_FIELD, payload })

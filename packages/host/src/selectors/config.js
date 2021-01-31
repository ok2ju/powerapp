export const getWidgets = (state) => {
  return Object.keys(state.config).map(key => state.config[key])
}

import charts from '../mocks/charts'

export default {
  list() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(charts)
      }, 2000)
    })
  }
}

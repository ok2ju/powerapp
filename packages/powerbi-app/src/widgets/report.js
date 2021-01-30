import React from 'react'
import ReactDOM from 'react-dom'
import Chart from '../components/Chart'

window.renderPowerBIChart = (containerId) => {
  ReactDOM.render(
    <Chart />,
    document.getElementById(containerId)
  )
}

window.unmountRestaurant = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
}

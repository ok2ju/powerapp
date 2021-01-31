import React from 'react'
import ReactDOM from 'react-dom'
import ChartRequester from '../pages/Viewer/ChartRequester'

window.renderPowerBIChart = (containerId, { chartId, ...rest }) => {
  ReactDOM.render(
    <ChartRequester chartId={chartId} {...rest} />,
    document.getElementById(containerId)
  )
}

window.unmountRestaurant = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
}

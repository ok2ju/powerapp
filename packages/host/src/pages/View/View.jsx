import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import GridLayout from 'react-grid-layout'
import { getWidgets } from '../../selectors/config'
import Injector from '../../components/Injector'

const generateLayout = (colsNumber, widgets) => {
  const layout = []
  const defaultProps = { w: 6, h: 2 }
  let xCounter = 0
  let yCounter = 0

  for (let i = 0; i < widgets.length; i++) {
    const widgetConfig = widgets[i]

    const widgetGridConfig = Object.assign({}, defaultProps, {
      i: widgetConfig.id,
      x: xCounter + (layout[i - 1]?.w || 0),
      y: yCounter
    })

    layout.push(widgetGridConfig)

    if (xCounter === colsNumber) {
      yCounter++
      xCounter = 0
    }
  }
  return layout
}

const View = () => {
  const widgets = useSelector(getWidgets)
  const layout = generateLayout(12, widgets)

  return (
    <div>
      <h1>View page</h1>
      {widgets.length > 0 && (
        <GridLayout layout={layout} cols={12} width={1200}>
          {widgets.map(({ id, name, host, params }, index) => (
            <div key={id}>
              <Injector id={id} name={name} host={host} {...params} />
            </div>
          ))}
        </GridLayout>
      )}
      {widgets.length === 0 && (
        <span>
          Your dashboard is not configured.
          <Link to='/settings'>Go to settings page</Link>
        </span>
      )}
    </div>
  )
}

export default View

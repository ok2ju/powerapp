import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Resizable } from 're-resizable'
import { getWidgets } from '../../selectors/config'
import Injector from '../../components/Injector'
import { Container, Row } from './styles'

const layoutBoxStyles = {
  border: '1px solid orange'
}

const getLayout = (widgets, size) => {
  const count = widgets.length || 0

  let index = 0
  let resIndex = 0
  const res = []

  while (index < count) {
    res[resIndex++] = widgets.slice(index, size)
    index = index + size
  }

  return res
}

const View = () => {
  const widgets = useSelector(getWidgets)
  const maxRowItems = 3
  const rows = getLayout(widgets, maxRowItems)

  return (
    <div>
      <h1>View page</h1>
      {widgets.length > 0 && (
        <Container>
          {rows.map((row, index) => (
            <Row key={index}>
              {row.map(({ id, name, host, params }, idx) => (
                <Resizable
                  key={idx}
                  style={layoutBoxStyles}
                  defaultSize={{
                    width: `${100 / maxRowItems}%`,
                    height: 200
                  }}
                  minWidth='1'
                  enable={{ bottomRight: true }}
                >
                  <Injector id={id} name={name} host={host} {...params} />
                </Resizable>
              ))}
            </Row>
          ))}
        </Container>
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

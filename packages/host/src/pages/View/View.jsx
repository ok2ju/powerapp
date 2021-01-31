import React from 'react'
import Injector from '../../components/Injector'

const tenantWidgets = [{
  id: '1',
  name: 'PowerBIChart',
  host: 'http://localhost:8001',
  chartId: '1'
}, {
  id: '2',
  name: 'PowerBIChart',
  host: 'http://localhost:8001',
  chartId: '2'
}]

const View = () => {
  return (
    <div>
      <h1>View page</h1>
      {tenantWidgets.map(({ id, name, host, ...rest }, index) => (
        <Injector key={index} id={id} name={name} host={host} {...rest} />
      ))}
    </div>
  )
}

export default View

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getWidgets } from '../../selectors/config'
import { addWidget, editWidgetField } from '../../actions/actions'

const tenantWidgets = [{
  id: '1',
  name: 'PowerBIChart',
  host: 'http://localhost:8001',
  params: {
    chartId: ''
  }
}, {
  id: '2',
  name: 'PowerBIChart',
  host: 'http://localhost:8001',
  params: {
    chartId: ''
  }
}, {
  id: '3',
  name: 'TableauChart',
  host: 'http://localhost:8003',
  params: {
    chartId: ''
  }
}]

const Settings = () => {
  const selectedWidgets = useSelector(getWidgets)
  const dispatch = useDispatch()

  const handleSelectWidget = (config) => () => {
    dispatch(addWidget(config))
  }

  const handleChangeParam = (widget, key) => (event) => {
    const { value } = event.target
    dispatch(editWidgetField({ id: widget.id, field: key, value }))
  }

  return (
    <section>
      <h1>Settings page</h1>
      <div>
        <h2>Available widgets</h2>
        {tenantWidgets.map((widget, index) => (
          <div
            key={index}
            onClick={handleSelectWidget(widget)}
          >
            {widget.name} - {widget.id}
          </div>
        ))}
      </div>
      <div>
        <h2>Selected widgets</h2>
        {selectedWidgets.map((widget, index) => (
          <div key={index}>
            <div>{widget.name} - {widget.id}</div>
            {Object
              .keys(widget.params)
              .map((key, index) => (
                <div key={index}>
                  <label>{key}</label>
                  <input
                    type='text'
                    value={widget.params[key]}
                    onChange={handleChangeParam(widget, key)}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
      <Link to='/view'>Go to dashboard</Link>
    </section>
  )
}

export default Settings

import React, { useEffect, useState } from 'react'
import Chart from '../../components/Chart'
import { charts } from './charts'

const ChartRequester = ({ chartId }) => {
  const [config, setConfig] = useState(null)

  useEffect(() => {
    setConfig(charts[chartId] || {})
  }, [chartId])

  return (
    <div>
      {config !== null && (
        <Chart config={config} />
      )}
    </div>
  )
}

export default ChartRequester

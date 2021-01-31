import React from 'react'
import { useParams } from 'react-router-dom'
import ChartRequester from './ChartRequester'

const Viewer = () => {
  const { id: chartId } = useParams()

  return (
    <ChartRequester chartId={chartId} />
  )
}

export default Viewer

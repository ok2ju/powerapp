import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import ChartRequester from './ChartRequester'

const Viewer = () => {
  const { id: chartId } = useParams()

  return (
    <>
      <Header />
      <ChartRequester chartId={chartId} />
    </>
  )
}

export default Viewer

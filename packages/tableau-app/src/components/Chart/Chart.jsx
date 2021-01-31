import React from 'react'
import TableauReport from 'tableau-react'
import { ReportContainer } from './styles'

const Chart = ({ config }) => {
  return (
    <ReportContainer>
      <TableauReport url={config.url} />
    </ReportContainer>
  )
}

export default Chart

import React from 'react'
import { PowerBIEmbed } from 'powerbi-client-react'
import { ReportContainer } from './styles'

const Chart = ({ config }) => {
  return (
    <ReportContainer>
      <PowerBIEmbed embedConfig={config} cssClassName='powerbi-report' />
    </ReportContainer>
  )
}

export default Chart

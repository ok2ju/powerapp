import React from 'react'
import { models } from 'powerbi-client'
import { PowerBIEmbed } from 'powerbi-client-react'
import { embedToken, embedUrl, reportId } from './config'
import { ReportContainer } from './styles'

const config = {
  type: 'report',
  id: reportId,
  embedUrl: embedUrl,
  accessToken: embedToken,
  tokenType: models.TokenType.Embed
}

const Chart = () => {
  return (
    <ReportContainer>
      <PowerBIEmbed embedConfig={config} cssClassName='powerbi-report' />
    </ReportContainer>
  )
}

export default Chart

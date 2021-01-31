/* globals fetch */
import React, { useEffect, useState } from 'react'
import { models } from 'powerbi-client'
import Chart from '../../components/Chart'
import { Container } from './styles'

const normalizeReport = (report) => ({
  type: report.Type,
  id: report.Id,
  embedUrl: report.EmbedUrl,
  accessToken: report.EmbedToken.Token,
  tokenType: models.TokenType.Embed
})

const ChartRequester = ({ chartId }) => {
  const [config, setConfig] = useState(null)

  useEffect(() => {
    fetch(`https://playgroundbe-bck-1.azurewebsites.net/Reports/${chartId}`)
      .then((res) => res.json())
      .then((report) => {
        const config = normalizeReport(report)
        setConfig(config)
      })
  }, [chartId])

  return (
    <Container>
      {config !== null && (
        <Chart config={config} />
      )}
    </Container>
  )
}

export default ChartRequester

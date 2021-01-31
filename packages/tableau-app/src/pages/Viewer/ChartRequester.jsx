import React, { useEffect, useState } from 'react'
import Chart from '../../components/Chart'
import { Container } from './styles'

const mapper = {
  1: {
    url: 'https://public.tableau.com/views/ComplianceGauge/MaintenanceOrdersandCompliance'
  },
  2: {
    url: 'https://public.tableau.com/views/MarketingAnalytics_15995845112410/CampaignManagementDashboard'
  },
  3: {
    url: 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms'
  }
}

const ChartRequester = ({ chartId }) => {
  const [config, setConfig] = useState(null)

  useEffect(() => {
    setConfig(mapper[chartId])
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

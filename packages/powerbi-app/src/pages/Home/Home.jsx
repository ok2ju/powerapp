import React from 'react'
import { Link } from 'react-router-dom'
import { List, Card } from './styles'

const charts = [{
  id: 'SampleReport',
  name: 'Sample Report'
}, {
  id: 'SampleRdlReport',
  name: 'Sample Rdl Report'
}]

const Home = () => {
  return (
    <List>
      {charts.map((chart, index) => (
        <Link key={index} to={`/chart/${chart.id}/view`}>
          <Card>{chart.name}</Card>
        </Link>
      ))}
    </List>
  )
}

export default Home

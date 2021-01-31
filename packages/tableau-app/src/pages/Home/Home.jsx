import React from 'react'
import { Link } from 'react-router-dom'
import { List, Card } from './styles'

const charts = [{
  id: '1',
  name: 'Maintenance Ordersand Compliance'
}, {
  id: '2',
  name: 'Campaign Management Dashboard'
}, {
  id: '3',
  name: 'Storms'
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

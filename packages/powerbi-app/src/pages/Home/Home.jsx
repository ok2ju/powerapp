import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'

const Home = () => {
  return (
    <>
      <Header />
      <Link to='/chart/1/view'>Chart#1</Link>
      <Link to='/chart/2/view'>Chart#2</Link>
    </>
  )
}

export default Home

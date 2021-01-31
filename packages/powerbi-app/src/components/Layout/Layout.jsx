import React from 'react'
import Header from '../Header'
import { LayoutContainer } from './styles'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  )
}

export default Layout

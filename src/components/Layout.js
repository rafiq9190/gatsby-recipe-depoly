import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../Assets/css/main.css'

function Layout({ children }) {

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout

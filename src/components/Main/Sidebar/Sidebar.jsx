import React from 'react'

import SimpleBar from 'simplebar-react'

import './Sidebar.css'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 right-0 w-full h-full z-10 hidden transition duration-500 ease-in-out"
      style={{ background: 'rgb(0, 0, 0, 0.3)' }}
    >
      <div className="sidebar fixed top-0 right-0 w-full h-full z-20 bg-white transition duration-500 ease-in-out">
        <SimpleBar className="h-screen">
          <div className="h-full flex flex-col justify-between">
            <Header />
            <Content />
            <Footer />
          </div>
        </SimpleBar>
      </div>
    </div>
  )
}

export default Sidebar

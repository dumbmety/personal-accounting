import React from 'react'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import Header from '../components/Header/Header'
import Main from '../components/Main/Main'

const App = () => {
  return (
    <SimpleBar className="h-screen">
      <div className="container mx-auto py-16 px-6">
        <Header />
        <Main />
      </div>
    </SimpleBar>
  )
}

export default App

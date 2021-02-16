import React from 'react'

import Menu from './Menu/Menu'
import Sidebar from './Sidebar/Sidebar'
import Table from './Table/Table'

const Main = () => {
  return (
    <div className="py-8">
      <Menu />
      <Table />
      <Sidebar />
    </div>
  )
}

export default Main

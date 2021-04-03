import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import Context from '../context'
import Data from '../components/Data'
import Heading from '../components/Heading'
import Menu from '../components/Menu'

const App = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [openAddModal, setOpenAddModal] = useState(false)

  const handleOpenAddModal = () => setOpenAddModal(true)
  const handleCloseAddModal = () => setOpenAddModal(false)

  const categories = [
    { key: 0, text: 'All', value: 'all', color: 'grey' },
    { key: 1, text: 'Shopping', value: 'shopping', color: 'violet' },
    { key: 2, text: 'Health', value: 'health', color: 'red' },
    { key: 3, text: 'Job', value: 'job', color: 'blue' },
    { key: 4, text: 'Fax', value: 'fax', color: 'black' },
    { key: 5, text: 'Travel', value: 'travel', color: 'green' },
  ]

  useEffect(() => {
    setData([
      {
        id: 1,
        title: 'Online shop project',
        amount: 200,
        type: 'income',
        category: { key: 3, text: 'Job', value: 'job', icon: 'briefcase', color: 'blue' },
        createdAt: '2021-02-06',
      },
      {
        id: 2,
        title: 'Buy a laptop',
        amount: 1000,
        type: 'cost',
        category: { key: 1, text: 'Shopping', value: 'shopping', icon: 'shop', color: 'violet' },
        createdAt: '2021-03-15',
      },
    ])
  }, [])

  const handleGetRecord = id => {
    const allData = [...data]
    const record = allData.find(r => r.id === id)

    return record
  }

  const handleAddRecord = ({ title, amount, type, category }) => {
    const allData = [...data]

    const record = {
      id: allData.length + 1,
      title,
      amount,
      type,
      category,
      createdAt: Date.now(),
    }

    allData.push(record)
    setData(allData)
    setOpenAddModal(false)
  }

  const handleDeleteRecord = id => {
    const allData = [...data]
    allData.splice(id - 1, 1)

    setData(allData)
  }

  const handleEditRecord = ({ id, title, amount, type, category }) => {
    const allData = [...data]
    const recordIndex = allData.findIndex(r => r.id === id)
    const record = allData[recordIndex]
    record.title = title
    record.amount = amount
    record.type = type
    record.category = categories.find(c => c.value === category)

    setData(allData)
  }

  const handleFilter = category => {
    const allData = [...data]
    const filteredData = allData.filter(d => d.category.value === category)

    setFilteredData(filteredData)
  }

  return (
    <Context.Provider
      value={{
        data: filteredData.length ? filteredData : data,
        categories,
        filteredData: handleFilter,
        addRecord: handleAddRecord,
        deleteRecord: handleDeleteRecord,
        editRecord: handleEditRecord,
        getRecord: handleGetRecord,
        handleCloseAddModal,
        handleOpenAddModal,
        openAddModal,
      }}
    >
      <SimpleBar style={{ height: '100vh', padding: '5rem' }}>
        <Container>
          <Heading />
          <Menu />
          <Data />
        </Container>
      </SimpleBar>
    </Context.Provider>
  )
}

export default App

import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import Context from '../context'
import Data from '../components/Data'
import Heading from '../components/Heading'
import Menu from '../components/Menu'

import { colorGenerator } from '../utils'

const App = () => {
  const [data, setData] = useState([])
  const [record, setRecord] = useState({})

  useEffect(() => {
    setData([
      {
        id: 1,
        title: 'Online shop project',
        description: 'Added new features',
        amount: 200,
        type: 'income',
        categories: [{ id: 1, name: 'freelancing', color: 'pink' }],
        createdAt: '2021-02-06',
      },
      {
        id: 2,
        title: 'Buy a laptop',
        description: 'A new macbook air with M1 chip',
        amount: 1000,
        type: 'cost',
        categories: [{ id: 1, name: 'apple', color: 'grey' }],
        createdAt: '2021-03-15',
      },
    ])
  }, [])

  const handleAddRecord = record => {
    const allData = [...data]

    const categories = []
    record.categories.split(',').map(category => {
      categories.push({
        id: categories.length,
        name: category,
        color: colorGenerator(),
      })
    })

    const newRecord = {
      id: allData.length + 1,
      title: record.title,
      description: record.description,
      amount: record.amount,
      type: record.type,
      categories: categories,
      createdAt: Date.now(),
    }

    allData.push(newRecord)
    setData(allData)
  }

  const handleDeleteRecord = id => {
    const allData = [...data]
    allData.splice(id - 1, 1)

    setData(allData)
  }

  const handleEditRecord = id => {
    alert('edit')
  }

  return (
    <Context.Provider
      value={{
        data,
        record,
        addRecord: handleAddRecord,
        editRecord: handleEditRecord,
        deleteRecord: handleDeleteRecord,
      }}
    >
      <SimpleBar>
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

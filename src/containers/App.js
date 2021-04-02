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
  const [item, setItem] = useState({})

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

  const handleAddItem = item => {
    const allData = [...data]

    const categories = []
    item.categories.split(',').map(category => {
      categories.push({
        id: categories.length,
        name: category,
        color: colorGenerator(),
      })
    })

    const newItem = {
      id: allData.length + 1,
      title: item.title,
      description: item.description,
      amount: item.amount,
      type: item.type,
      categories: categories,
      createdAt: Date.now(),
    }

    allData.push(newItem)
    setData(allData)
  }

  const handleDeleteItem = id => {
    const allData = [...data]
    allData.splice(id - 1, 1)

    setData(allData)
  }

  const handleEditItem = id => {
    alert('edit')
  }

  return (
    <Context.Provider
      value={{
        data,
        item,
        addItem: handleAddItem,
        editItem: handleEditItem,
        deleteItem: handleDeleteItem,
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

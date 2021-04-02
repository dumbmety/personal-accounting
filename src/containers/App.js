import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import Data from '../components/Data'
import Heading from '../components/Heading'
import Menu from '../components/Menu'

import { colorGenerator } from '../utils'

const App = () => {
  const [items, setItems] = useState([])
  const [item, setItem] = useState([])
  const [openAddModal, setOpenAddModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [, setOpenDeleteModal] = useState(false)

  useEffect(() => {
    setItems([
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

  const handleOpenAddModal = () => setOpenAddModal(true)
  const handleCloseAddModal = () => setOpenAddModal(false)

  const handleOpenEditModal = id => {
    const item = items.filter(i => i.id === id)

    if (typeof id === 'number') {
      setItem(item)
    }

    setOpenEditModal(true)
  }

  const handleCloseEditModal = () => setOpenEditModal(false)

  const handleOpenDeleteModal = () => setOpenDeleteModal(true)
  const handleCloseDeleteModal = () => setOpenDeleteModal(false)

  const handleAddItem = item => {
    const allItems = [...items]

    const categories = []
    item.categories.split(',').map(category => {
      categories.push({
        id: categories.length,
        name: category,
        color: colorGenerator(),
      })
    })

    const newItem = {
      id: allItems.length + 1,
      title: item.title,
      description: item.description,
      amount: item.amount,
      type: item.type,
      categories: categories,
      createdAt: Date.now(),
    }

    allItems.push(newItem)
    setItems(allItems)
    setOpenAddModal(false)
  }

  const handleDeleteItem = id => {
    const allItems = [...items]
    allItems.splice(id - 1, 1)

    setItems(allItems)
  }

  const handleEditItem = id => {
    alert('edit')
  }

  return (
    <SimpleBar>
      <Container>
        <Heading />
        <Menu
          addItem={handleAddItem}
          status={openAddModal}
          open={handleOpenAddModal}
          close={handleCloseAddModal}
        />
        <Data
          data={items}
          targetData={item}
          status={openEditModal}
          editItem={handleEditItem}
          deleteItem={handleDeleteItem}
          openEdit={handleOpenEditModal}
          closeEdit={handleCloseEditModal}
          openDelete={handleOpenDeleteModal}
          closeDelete={handleCloseDeleteModal}
        />
      </Container>
    </SimpleBar>
  )
}

export default App

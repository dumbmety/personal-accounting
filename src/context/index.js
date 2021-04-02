import { createContext } from 'react'

const context = createContext({
  data: [],
  item: {},
  addItem: () => {},
  editItem: () => {},
  deleteItem: () => {},
})

export default context

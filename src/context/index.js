import { createContext } from 'react'

const context = createContext({
  // data
  data: [],
  categories: [],
  record: {},

  // handler
  getRecord: () => {},
  addRecord: () => {},
  editRecord: () => {},
  deleteRecord: () => {},

  // modals
  openAddModal: false,
  handleOpenAddModal: () => {},
  handleCloseAddModal: () => {},
})

export default context

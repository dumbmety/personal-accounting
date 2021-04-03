import { createContext } from 'react'

const context = createContext({
  // data
  data: [],
  record: {},

  // handler
  addRecord: () => {},
  editRecord: () => {},
  deleteRecord: () => {},

  // modals
  openAddModal: false,
  handleOpenAddModal: () => {},
  handleCloseAddModal: () => {},
})

export default context

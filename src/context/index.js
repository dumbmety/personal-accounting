import { createContext } from 'react'

const context = createContext({
  // data
  data: [],
  record: {},

  // handler
  addRecord: () => {},
  editRecord: () => {},
  deleteRecord: () => {},

  // modals [add]
  openAddModal: false,
  closeAddModal: false,
  handleOpenAddModal: () => {},
  handleCloseAddModal: () => {},
})

export default context

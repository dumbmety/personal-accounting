import { createContext } from 'react'

const context = createContext({
  // data
  data: [],
  filter: '',
  categories: [],

  // handler
  filteredData: () => {},
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

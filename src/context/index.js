import { createContext } from 'react'

const context = createContext({
  // data
  data: [],
  record: {},

  // handler
  addRecord: () => {},
  editRecord: () => {},
  deleteRecord: () => {},

  // modals [delete]
  openDeleteModal: false,
  handleOpenDeleteModal: () => {},
  handleCloseDeleteModal: () => {},
})

export default context

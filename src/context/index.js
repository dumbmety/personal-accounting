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
  handleOpenAddModal: () => {},
  handleCloseAddModal: () => {},

  // modals [edit]
  openEditModal: false,
  handleOpenEditModal: () => {},
  handleCloseEditModal: () => {},

  // modals [delete]
  openDeleteModal: false,
  handleOpenDeleteModal: () => {},
  handleCloseDeleteModal: () => {},
})

export default context

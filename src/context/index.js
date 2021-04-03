import { createContext } from 'react'

const context = createContext({
  // data
  data: [],
  record: {},

  // handler
  addRecord: () => {},
  editRecord: () => {},
  deleteRecord: () => {},
})

export default context

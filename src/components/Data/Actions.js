import { Table } from 'semantic-ui-react'

import Edit from './Edit'
import Delete from './Delete'

const Actions = ({ title }) => {
  return (
    <Table.Cell collapsing>
      <Edit />
      <Delete title={title} />
    </Table.Cell>
  )
}

export default Actions

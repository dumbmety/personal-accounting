import { useContext } from 'react'
import { Table } from 'semantic-ui-react'

import Edit from './Edit'
import Delete from './Delete'

import Context from '../../context'

const Actions = ({ id, title }) => {
  const { deleteRecord, editRecord } = useContext(Context)

  return (
    <Table.Cell collapsing>
      <Edit editRecord={() => editRecord(id)} />
      <Delete title={title} deleteRecord={() => deleteRecord(id)} />
    </Table.Cell>
  )
}

export default Actions

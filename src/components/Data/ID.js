import { Table } from 'semantic-ui-react'

const ID = ({ id }) => {
  return (
    <Table.Cell collapsing textAlign="center">
      {id}
    </Table.Cell>
  )
}

export default ID

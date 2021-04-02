import { Label, Table } from 'semantic-ui-react'

const Type = ({ type }) => {
  return (
    <Table.Cell collapsing>
      <Label title={type} basic color={type === 'income' ? 'green' : 'red'}>
        {type}
      </Label>
    </Table.Cell>
  )
}

export default Type

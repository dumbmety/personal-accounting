import { Table } from 'semantic-ui-react'

const Amount = ({ amount }) => {
  return (
    <Table.Cell title={`$${amount}`} collapsing>
      ${amount}
    </Table.Cell>
  )
}

export default Amount

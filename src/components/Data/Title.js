import { Table } from 'semantic-ui-react'

const Title = ({ title }) => {
  return (
    <Table.Cell title={title} collapsing>
      {title}
    </Table.Cell>
  )
}

export default Title

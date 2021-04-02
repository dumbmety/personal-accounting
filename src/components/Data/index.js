import { useContext } from 'react'
import { Table } from 'semantic-ui-react'

import Context from '../../context'
import Item from './Item'

const Data = () => {
  const { data } = useContext(Context)

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Amount</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Categories</Table.HeaderCell>
          <Table.HeaderCell>Created At</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(item => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            amount={item.amount}
            type={item.type}
            categories={item.categories}
            createdAt={item.createdAt}
          />
        ))}
      </Table.Body>
    </Table>
  )
}

export default Data

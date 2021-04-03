import { useContext } from 'react'
import { Table } from 'semantic-ui-react'

import Context from '../../context'
import Record from './Record'

const Data = () => {
  const { data } = useContext(Context)

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Amount</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Categories</Table.HeaderCell>
          <Table.HeaderCell>Created At</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(record => (
          <Record
            key={record.id}
            id={record.id}
            title={record.title}
            amount={record.amount}
            type={record.type}
            categories={record.categories}
            createdAt={record.createdAt}
          />
        ))}
      </Table.Body>
    </Table>
  )
}

export default Data

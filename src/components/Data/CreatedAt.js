import moment from 'moment'
import { Table } from 'semantic-ui-react'

const Actions = ({ createdAt }) => {
  return (
    <Table.Cell collapsing>
      <time dateTime={createdAt} title={createdAt}>
        {moment(createdAt).format('ll')}
      </time>
    </Table.Cell>
  )
}

export default Actions

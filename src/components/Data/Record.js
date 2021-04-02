import { Table } from 'semantic-ui-react'

import Actions from './Actions'
import Amount from './Amount'
import Categories from './Categories'
import CreatedAt from './CreatedAt'
import Description from './Description'
import ID from './ID'
import Title from './Title'
import Type from './Type'

const Record = ({ id, title, description, amount, type, categories, createdAt }) => {
  return (
    <Table.Row>
      <ID id={id} />
      <Title title={title} />
      <Description description={description} />
      <Amount amount={amount} />
      <Type type={type} />
      <Categories categories={categories} />
      <CreatedAt createdAt={createdAt} />
      <Actions title={title} />
    </Table.Row>
  )
}

export default Record

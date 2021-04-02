import { Table } from 'semantic-ui-react'

const Description = ({ description }) => {
  return <Table.Cell title={description}>{description}</Table.Cell>
}

export default Description

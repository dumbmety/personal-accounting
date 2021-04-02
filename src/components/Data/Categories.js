import { Label, Table } from 'semantic-ui-react'

const Categories = ({ categories }) => {
  return (
    <Table.Cell collapsing>
      {categories.map(category => (
        <Label title={category.name} basic key={category.id} color={category.color}>
          {category.name}
        </Label>
      ))}
    </Table.Cell>
  )
}

export default Categories

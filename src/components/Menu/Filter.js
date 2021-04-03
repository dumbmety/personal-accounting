import { useContext } from 'react'
import { Button, Dropdown, Icon } from 'semantic-ui-react'

import Context from '../../context'

const Filter = () => {
  const { categories } = useContext(Context)

  return (
    <Dropdown pointing="top" trigger={<Button icon="filter" content="Filter" />} icon={null}>
      <Dropdown.Menu>
        {categories.map(category => (
          <Dropdown.Item key={category.key} style={{ display: 'flex' }}>
            <Icon name={category.icon} color={category.color} />
            {category.text}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Filter

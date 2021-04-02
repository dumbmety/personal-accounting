import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

const Add = () => {
  return (
    <Link to="/add">
      <Button color="blue">
        <Icon name="add" />
        Add record
      </Button>
    </Link>
  )
}

export default Add

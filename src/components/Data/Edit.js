import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

const Edit = ({ id }) => {
  return (
    <Link to={`/edit/${id}`}>
      <Button icon color="green">
        <Icon name="edit" />
      </Button>
    </Link>
  )
}

export default Edit

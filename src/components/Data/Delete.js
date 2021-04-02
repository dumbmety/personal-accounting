import { useContext } from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react'

import Context from '../../context'

const Delete = ({ title, deleteRecord }) => {
  const { handleOpenDelelteModal } = useContext(Context)

  return (
    <Modal
      size="tiny"
      trigger={
        <Button onClick={handleOpenDelelteModal} icon color="red">
          <Icon name="delete" />
        </Button>
      }
      header="Are you sure?"
      content={`Are you sure to want delete "${title}" record?`}
      actions={[
        'No!',
        {
          key: 'done',
          content: 'Yes, delete it',
          positive: true,
          onClick: deleteRecord,
        },
      ]}
    />
  )
}

export default Delete

import { Modal, Button, Icon } from 'semantic-ui-react'

const Delete = ({ title }) => {
  return (
    <Modal
      size="tiny"
      trigger={
        <Button icon color="red">
          <Icon name="delete" />
        </Button>
      }
      header="Are you sure?"
      content={`Are you sure to want delete "${title}" item?`}
      actions={[
        'No!',
        {
          key: 'done',
          content: 'Yes, delete it',
          positive: true,
        },
      ]}
    />
  )
}

export default Delete

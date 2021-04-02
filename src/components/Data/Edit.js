import { useContext } from 'react'
import { Button, Icon, Label, Modal, Form, Select, TextArea, Input } from 'semantic-ui-react'

import Context from '../../context'

const Edit = ({ id, editRecord }) => {
  const { handleCloseEditModal, handleOpenEditModal, openEditModal } = useContext(Context)

  return (
    <Modal
      onClose={handleCloseEditModal}
      onOpen={handleOpenEditModal}
      open={openEditModal}
      trigger={
        <Button onClick={handleOpenEditModal} icon color="green">
          <Icon name="edit" />
        </Button>
      }
    >
      <Modal.Header>Edit Record</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="title">Title</label>
              <input id="title" placeholder="Enter record title ..." />
            </Form.Field>
            <Form.Field>
              <label htmlFor="description">Description</label>
              <input id="description" placeholder="Enter record description ..." />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="amount">Amount</label>
              <Input labelPosition="right" type="text" placeholder="Amount">
                <Label basic>$</Label>
                <input id="amount" />
                <Label>.00</Label>
              </Input>
            </Form.Field>
            <Form.Field>
              <label>Type</label>
              <Select
                placeholder="Choose Type"
                options={[
                  {
                    key: 'i',
                    text: 'Income',
                    value: 'income',
                  },
                  {
                    key: 'c',
                    text: 'Cost',
                    value: 'cost',
                  },
                ]}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label htmlFor="categories">Categories</label>
            <TextArea id="categories" placeholder="Separate categories with commas" />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleCloseEditModal}>Cancel</Button>
        <Button onClick={editRecord} content="Edit" labelPosition="right" icon="edit" positive />
      </Modal.Actions>
    </Modal>
  )
}

export default Edit

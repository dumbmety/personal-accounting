import { useContext, useState } from 'react'
import { Button, Form, Input, Label, Modal, Select, TextArea } from 'semantic-ui-react'

import Context from '../../context'

const Add = () => {
  const [open, setOpen] = useState(false)
  const { addRecord } = useContext(Context)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button content="Add record" icon="add" color="blue" />}
    >
      <Modal.Header>Add new Record</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="title">Title</label>
              <input id="title" placeholder="Enter title ..." />
            </Form.Field>
            <Form.Field>
              <label htmlFor="description">Description</label>
              <input id="description" placeholder="Enter description ..." />
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
                placeholder="Choose type"
                options={[
                  { key: 'i', value: 'income', text: 'Income' },
                  { key: 'c', value: 'cost', text: 'Cost' },
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
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button content="Add" labelPosition="right" icon="add" onClick={addRecord} positive />
      </Modal.Actions>
    </Modal>
  )
}

export default Add

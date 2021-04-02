import { useContext, useState } from 'react'
import { Button, Form, Icon, Input, Label, Modal, Select, TextArea } from 'semantic-ui-react'

import Context from '../../context'

const Add = () => {
  // input state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('')
  const [categories, setCategories] = useState('')

  // context
  const { addRecord, handleCloseAddModal, handleOpenAddModal, openAddModal } = useContext(Context)

  const newRecord = { title, description, amount, type, categories }

  return (
    <div>
      <Modal
        onClose={handleCloseAddModal}
        onOpen={handleOpenAddModal}
        open={openAddModal}
        trigger={
          <Button onClick={handleOpenAddModal} color="blue">
            <Icon name="add" />
            Add record
          </Button>
        }
      >
        <Modal.Header>Add new Record</Modal.Header>
        <Modal.Content>
          <Form onSubmit={() => addRecord(newRecord)}>
            <Form.Group widths="equal">
              <Form.Field>
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  placeholder="Enter record title ..."
                  onChange={e => setTitle(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  placeholder="Enter record description ..."
                  onChange={e => setDescription(e.target.value)}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <label htmlFor="amount">Amount</label>
                <Input labelPosition="right" type="text" placeholder="Amount">
                  <Label basic>$</Label>
                  <input id="amount" onChange={e => setAmount(e.target.value)} />
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
                      onClick: () => setType('income'),
                    },
                    { key: 'c', text: 'Cost', value: 'cost', onClick: () => setType('cost') },
                  ]}
                  value={type || null}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label htmlFor="categories">Categories</label>
              <TextArea
                id="categories"
                placeholder="Separate categories with commas"
                onChange={e => setCategories(e.target.value)}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleCloseAddModal}>Cancel</Button>
          <Button
            content="Add"
            labelPosition="right"
            icon="add"
            onClick={() => addRecord(newRecord)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default Add

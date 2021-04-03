import { useContext, useState } from 'react'
import { Button, Form, Input, Label, Modal, Select } from 'semantic-ui-react'

import Context from '../../context'

const Add = () => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('')
  const [categories, setCategories] = useState('')

  const { addRecord, openAddModal, handleCloseAddModal, handleOpenAddModal } = useContext(Context)

  return (
    <Modal
      onClose={handleCloseAddModal}
      onOpen={handleOpenAddModal}
      open={openAddModal}
      trigger={<Button content="Add record" icon="add" color="blue" />}
    >
      <Modal.Header>Add new Record</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                value={title}
                placeholder="Enter title ..."
                onChange={e => setTitle(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="categories">Categories</label>
              <input
                id="categories"
                value={categories}
                placeholder="Enter categories ..."
                onChange={e => setCategories(e.target.value)}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="amount">Amount</label>
              <Input labelPosition="right" type="text" placeholder="Amount">
                <Label basic>$</Label>
                <input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
                <Label>.00</Label>
              </Input>
            </Form.Field>
            <Form.Field>
              <label>Type</label>
              <Select
                placeholder="Choose type"
                value={type}
                options={[
                  { key: 'i', value: 'income', text: 'Income', onClick: () => setType('income') },
                  { key: 'c', value: 'cost', text: 'Cost', onClick: () => setType('cost') },
                ]}
              />
            </Form.Field>
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleCloseAddModal}>Cancel</Button>
        <Button
          content="Add"
          labelPosition="right"
          icon="add"
          onClick={() => addRecord({ title, amount, type, categories })}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default Add

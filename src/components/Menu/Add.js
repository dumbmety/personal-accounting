import { useContext, useState } from 'react'
import { Button, Form, Input, Label, Modal, Select } from 'semantic-ui-react'

import Context from '../../context'

const Add = () => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')

  const {
    categories: categoriesList,
    addRecord,
    openAddModal,
    handleCloseAddModal,
    handleOpenAddModal,
  } = useContext(Context)

  const handleSubmitForm = () => {
    addRecord({ title, amount, type, category })
    setTitle('')
    setAmount('')
    setType('')
    setCategory('')
  }

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
              <label htmlFor="categories">Category</label>
              <Select
                placeholder="Choose a Category"
                value={category}
                options={categoriesList}
                onChange={(event, data) => setCategory(data.value)}
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
                  { key: 'i', value: 'Income', text: 'Income' },
                  { key: 'c', value: 'Cost', text: 'Cost' },
                ]}
                onChange={(event, data) => setType(data.value)}
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
          onClick={handleSubmitForm}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default Add

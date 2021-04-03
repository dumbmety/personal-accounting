import { useContext, useState } from 'react'
import { Button, Form, Input, Label, Modal, Select } from 'semantic-ui-react'

import Context from '../../context'

const Edit = ({ id }) => {
  const { getRecord, editRecord } = useContext(Context)
  const record = getRecord(id)

  const [title, setTitle] = useState(record.title)
  const [amount, setAmount] = useState(record.amount)
  const [type, setType] = useState(record.type)
  let [categories, setCategories] = useState(record.categories)

  const [openEditModal, setOpenEditModal] = useState(false)

  const handleOpenEditModal = () => setOpenEditModal(true)
  const handleCloseEditModal = () => setOpenEditModal(false)

  const handleSubmitModal = () => {
    debugger
    editRecord({ id, title, amount, type, categories })
    setOpenEditModal(false)
  }

  if (typeof categories !== 'string') {
    categories = categories.map(category => category.name)
  }

  return (
    <Modal
      onClose={handleCloseEditModal}
      onOpen={handleOpenEditModal}
      open={openEditModal}
      trigger={<Button icon="edit" color="green" />}
    >
      <Modal.Header>Edit Record</Modal.Header>
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
        <Button onClick={handleCloseEditModal}>Cancel</Button>
        <Button
          content="Edit"
          labelPosition="right"
          icon="edit"
          onClick={handleSubmitModal}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default Edit

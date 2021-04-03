import { useContext, useState } from 'react'
import { Button, Dropdown, Form, Icon, Input, Label, Modal, Select } from 'semantic-ui-react'

import Context from '../../context'

const Edit = ({ id }) => {
  const { categories, getRecord, editRecord } = useContext(Context)
  const record = getRecord(id)

  const [title, setTitle] = useState(record.title)
  const [amount, setAmount] = useState(record.amount)
  const [type, setType] = useState(record.type)
  const [category, setCategory] = useState(record.category.value)

  const [openEditModal, setOpenEditModal] = useState(false)

  const handleOpenEditModal = () => setOpenEditModal(true)
  const handleCloseEditModal = () => setOpenEditModal(false)

  const handleSubmitModal = () => {
    editRecord({ id, title, amount, type, category })
    setOpenEditModal(false)
  }

  return (
    <Modal
      onClose={handleCloseEditModal}
      onOpen={handleOpenEditModal}
      open={openEditModal}
      trigger={
        <Dropdown.Item>
          <Icon color="grey" name="edit" />
          Edit
        </Dropdown.Item>
      }
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
              <label htmlFor="category">Category</label>
              <Select
                placeholder="Choose a Category"
                value={category}
                options={categories}
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
                  { key: 'i', value: 'income', text: 'Income' },
                  { key: 'c', value: 'cost', text: 'Cost' },
                ]}
                onChange={(event, data) => setType(data.value)}
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

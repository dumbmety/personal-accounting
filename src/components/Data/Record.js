import moment from 'moment'
import { useContext, useState } from 'react'
import { Button, Form, Input, Label, Modal, Select, Table, TextArea } from 'semantic-ui-react'

import Context from '../../context'

const Record = ({ id, title, amount, type, categories, createdAt }) => {
  // modal state
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  // modal handler
  const handleOpenEditModal = () => setOpenEditModal(true)
  const handleCloseEditModal = () => setOpenEditModal(false)
  const handleOpenDeleteModal = () => setOpenDeleteModal(true)
  const handleCloseDeleteModal = () => setOpenDeleteModal(false)

  // context
  const { editRecord, deleteRecord } = useContext(Context)

  return (
    <Table.Row>
      <Table.Cell collapsing textAlign="center">
        {id}
      </Table.Cell>
      <Table.Cell title={title}>{title}</Table.Cell>
      <Table.Cell title={`$${amount}`} collapsing>
        ${amount}
      </Table.Cell>
      <Table.Cell collapsing>
        <Label title={type} basic color={type === 'income' ? 'green' : 'red'}>
          {type}
        </Label>
      </Table.Cell>
      <Table.Cell collapsing>
        {categories.map(category => (
          <Label basic key={category.id} title={category.name} color={category.color}>
            {category.name}
          </Label>
        ))}
      </Table.Cell>
      <Table.Cell collapsing>
        <time dateTime={createdAt} title={createdAt}>
          {moment(createdAt).format('ll')}
        </time>
      </Table.Cell>
      <Table.Cell collapsing>
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
            <Button onClick={handleCloseEditModal}>Cancel</Button>
            <Button
              content="Add"
              labelPosition="right"
              icon="add"
              onClick={() => editRecord(id)}
              positive
            />
          </Modal.Actions>
        </Modal>
        <Modal
          onClose={handleCloseDeleteModal}
          onOpen={handleOpenDeleteModal}
          open={openDeleteModal}
          size="tiny"
          trigger={<Button onClick={handleOpenDeleteModal} icon="delete" color="red" />}
          header="Are you sure?"
          content={`Are you sure to want delete "${title}" record?`}
          actions={[
            'No!',
            {
              key: 'done',
              content: 'Yes, delete it',
              positive: true,
              onClick: () => deleteRecord(id),
            },
          ]}
        />
      </Table.Cell>
    </Table.Row>
  )
}

export default Record

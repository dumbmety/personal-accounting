import moment from 'moment';
import { useState } from 'react';
import {
  Table,
  Button,
  Icon,
  Label,
  Modal,
  Form,
  Select,
  TextArea,
  Input,
} from 'semantic-ui-react';

function Data({ data, status, openDelete, openEdit, closeEdit, editItem, deleteItem, targetData }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [categories, setCategories] = useState('');

  const item = { title, description, amount, type, categories };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <Icon name="hashtag" />
          </Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Amount</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Categories</Table.HeaderCell>
          <Table.HeaderCell>Created At</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(item => (
          <Table.Row key={item.id}>
            <Table.Cell collapsing textAlign="center">
              {item.id}
            </Table.Cell>
            <Table.Cell title={item.title} collapsing>
              {item.title}
            </Table.Cell>
            <Table.Cell title={item.description}>{item.description}</Table.Cell>
            <Table.Cell title={`$${item.amount}`} collapsing>
              ${item.amount}
            </Table.Cell>
            <Table.Cell collapsing>
              <Label title={item.type} basic color={item.type === 'income' ? 'green' : 'red'}>
                {item.type}
              </Label>
            </Table.Cell>
            <Table.Cell collapsing>
              {item.categories.map(item => (
                <Label title={item.name} basic key={item.id} color={item.color}>
                  {item.name}
                </Label>
              ))}
            </Table.Cell>
            <Table.Cell collapsing>
              <time dateTime={item.createdAt} title={item.createdAt}>
                {moment(item.createdAt).format('ll')}
              </time>
            </Table.Cell>
            <Table.Cell collapsing>
              <Modal
                onClose={closeEdit}
                onOpen={openEdit}
                open={status}
                trigger={
                  <Button onClick={() => openEdit(item.id)} icon color="green">
                    <Icon name="edit" />
                  </Button>
                }
              >
                <Modal.Header>Edit Item</Modal.Header>
                <Modal.Content>
                  <Form onSubmit={() => {}}>
                    <Form.Group widths="equal">
                      <Form.Field>
                        <label htmlFor="title">Title</label>
                        <input
                          id="title"
                          value={targetData[0]?.title}
                          placeholder="Enter item title ..."
                          onChange={e => setTitle(e.target.value)}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label htmlFor="description">Description</label>
                        <input
                          id="description"
                          value={targetData[0]?.description}
                          placeholder="Enter item description ..."
                          onChange={e => setDescription(e.target.value)}
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
                            value={targetData[0]?.amount}
                            onChange={e => setAmount(e.target.value)}
                          />
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
                            {
                              key: 'c',
                              text: 'Cost',
                              value: 'cost',
                              onClick: () => setType('cost'),
                            },
                          ]}
                          value={targetData[0]?.type}
                        />
                      </Form.Field>
                    </Form.Group>
                    <Form.Field>
                      <label htmlFor="categories">Categories</label>
                      <TextArea
                        id="categories"
                        placeholder="Separate categories with commas"
                        onChange={e => setCategories(e.target.value)}
                        value={targetData[0]?.categories.map(category => category.name)}
                      />
                    </Form.Field>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={closeEdit}>Cancel</Button>
                  <Button
                    content="Edit"
                    labelPosition="right"
                    icon="edit"
                    onClick={() => editItem(item.id)}
                    positive
                  />
                </Modal.Actions>
              </Modal>
              <Modal
                size="tiny"
                trigger={
                  <Button onClick={openDelete} icon color="red">
                    <Icon name="delete" />
                  </Button>
                }
                header="Are you sure?"
                content={`Are you sure to want delete "${item.title}" item?`}
                actions={[
                  'No!',
                  {
                    key: 'done',
                    content: 'Yes, delete it',
                    positive: true,
                    onClick: () => deleteItem(item.id),
                  },
                ]}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Data;

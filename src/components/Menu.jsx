import { useState } from 'react';
import { Button, Form, Icon, Input, Label, Modal, Select, TextArea } from 'semantic-ui-react';

function Menu({ status, open, close, addItem }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [categories, setCategories] = useState('');

  const newItem = { title, description, amount, type, categories };

  return (
    <section id="main-menu">
      <div className="header__actions">
        <Button.Group>
          <Button>
            <Icon name="filter" />
            Filter
          </Button>
          <Button>
            <Icon name="sort content descending" />
            Sort
          </Button>
          <Button>
            <Icon name="search" />
            Search
          </Button>
        </Button.Group>
      </div>
      <div>
        <Modal
          onClose={close}
          onOpen={open}
          open={status}
          trigger={
            <Button onClick={open} color="blue">
              <Icon name="add" />
              Add item
            </Button>
          }
        >
          <Modal.Header>Add new Item</Modal.Header>
          <Modal.Content>
            <Form onSubmit={() => addItem(newItem)}>
              <Form.Group widths="equal">
                <Form.Field>
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    placeholder="Enter item title ..."
                    onChange={e => setTitle(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="description">Description</label>
                  <input
                    id="description"
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
                    <input id="amount" onChange={e => setAmount(e.target.value)} />
                    <Label>.00</Label>
                  </Input>
                </Form.Field>
                {/* <Form.Field
                  control={Select}
                  label="Type"
                  options={[
                    { key: 'i', text: 'Income', value: 'income' },
                    { key: 'c', text: 'Cost', value: 'cost' },
                  ]}
                  placeholder="Choose Type"
                  onChange={e => setType(e.target.value)}
                /> */}
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
            <Button onClick={close}>Cancel</Button>
            <Button
              content="Add"
              labelPosition="right"
              icon="add"
              onClick={() => addItem(newItem)}
              positive
            />
          </Modal.Actions>
        </Modal>
      </div>
    </section>
  );
}

export default Menu;

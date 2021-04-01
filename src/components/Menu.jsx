import { Button, Form, Icon, Input, Label, Modal, Radio, TextArea } from 'semantic-ui-react';

function Menu({ status, open, close }) {
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
            <Form>
              <Form.Group widths="equal">
                <Form.Field>
                  <label htmlFor="title">Title</label>
                  <input id="title" placeholder="Enter item title ..." />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="description">Description</label>
                  <input id="description" placeholder="Enter item description ..." />
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
                  <Form.Field>
                    <Radio label="Income" name="type" value="income" />
                  </Form.Field>
                  <Form.Field>
                    <Radio label="Cost" name="type" value="cost" />
                  </Form.Field>
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <label htmlFor="categories">Categories</label>
                <TextArea id="categories" placeholder="Separate categories with commas" />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={close}>Cancel</Button>
            <Button content="Add" labelPosition="right" icon="add" onClick={close} positive />
          </Modal.Actions>
        </Modal>
      </div>
    </section>
  );
}

export default Menu;

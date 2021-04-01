import moment from 'moment';
import { Table, Button, Icon, Label, Modal } from 'semantic-ui-react';

function Data({ data, open, close, deleteItem }) {
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
              <Button icon color="green">
                <Icon name="edit" />
              </Button>
              <Modal
                size="tiny"
                trigger={
                  <Button onClick={open} icon color="red">
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

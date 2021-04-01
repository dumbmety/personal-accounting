import moment from 'moment';
import { Table, Button, Icon, Label } from 'semantic-ui-react';

function Data({ data }) {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <Icon name="hashtag" />
          </Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Amount</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Categories</Table.HeaderCell>
          <Table.HeaderCell>Created At</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(item => (
          <Table.Row>
            <Table.Cell collapsing textAlign="center">
              {item.id}
            </Table.Cell>
            <Table.Cell title={item.title}>{item.title}</Table.Cell>
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
              <time role="created at" dateTime={item.createdAt} title={item.createdAt}>
                {moment(item.createdAt).format('ll')}
              </time>
            </Table.Cell>
            <Table.Cell collapsing>
              <Button icon color="green">
                <Icon name="edit" />
              </Button>
              <Button icon color="red">
                <Icon name="delete" />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Data;

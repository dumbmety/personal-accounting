import moment from 'moment';
import { Table, Button, Icon } from 'semantic-ui-react';

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
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell collapsing>{item.amount}</Table.Cell>
            <Table.Cell collapsing>{item.type}</Table.Cell>
            <Table.Cell collapsing>{item.categories}</Table.Cell>
            <Table.Cell collapsing>{moment(item.createdAt).format('ll')}</Table.Cell>
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

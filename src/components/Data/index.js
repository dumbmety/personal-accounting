import { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';

import { useDataHandler } from '../../provider';
import Record from './Record';

export default function Data() {
  const { data, filter } = useDataHandler();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (filter === 'all') return setFilteredData(data);
    const filteredData = data.filter(r => r.category.value === filter);
    if (!filteredData) return setFilteredData(null);
    setFilteredData(filteredData);
  }, [data, filter]);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell children="#" />
          <Table.HeaderCell children="Title" />
          <Table.HeaderCell children="Amount" />
          <Table.HeaderCell children="Type" />
          <Table.HeaderCell children="Category" />
          <Table.HeaderCell children="Created At" />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {filteredData.length === 0 ? (
          <Table.Row>
            <Table.Cell children="Data" />
          </Table.Row>
        ) : (
          filteredData.map(record => (
            <Record
              key={record.id}
              id={record.id}
              title={record.title}
              amount={record.amount}
              type={record.type}
              category={record.category}
              createdAt={record.createdAt}
            />
          ))
        )}
      </Table.Body>
    </Table>
  );
}

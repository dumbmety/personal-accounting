import React from 'react';

import SimpleBar from 'simplebar-react';

import { tableHead } from '../../../fixtures/table';

import TableHead from './TableHead';
import TableData from './TableData';

const Table = ({ data }) => {
  return (
    <SimpleBar className="w-full">
      <table className="list-items">
        <thead className="items__header">
          <tr>
            {tableHead.map(item => (
              <TableHead
                key={item.id}
                srOnly={item.srOnly}
                title={item.title}
              />
            ))}
          </tr>
        </thead>
        <tbody className="items__body">
          {data.map(item => (
            <TableData
              key={item.id}
              id={item.id}
              title={item.title}
              amount={item.amount}
              type={item.type}
              categories={item.categories}
              createdAt={item.createdAt}
            />
          ))}
        </tbody>
      </table>
    </SimpleBar>
  );
};

export default Table;

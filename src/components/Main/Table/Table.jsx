import React from 'react'

import SimpleBar from 'simplebar-react'

import { tableHead, tableData } from '../../../fixtures/table'

import TableHead from './TableHead'
import TableData from './TableData'

const Table = () => {
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
          {tableData.map(item => (
            <TableData
              key={item.id}
              id={item.id}
              title={item.title}
              amount={item.amount}
              type={item.type}
              category={item.category}
              createdAt={item.createdAt}
            />
          ))}
        </tbody>
      </table>
    </SimpleBar>
  )
}

export default Table

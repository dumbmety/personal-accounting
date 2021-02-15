import React from 'react'

import SimpleBar from 'simplebar-react'

import { tableHead, tableData } from '../../../fixtures/table'

import TableHead from './TableHead'
import TableData from './TableData'

const Table = () => {
  return (
    <SimpleBar className="w-full">
      <table className="min-w-full divide-y divide-gray-200 shadow-sm border border-gray-200">
        <thead className="bg-gray-50">
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
        <tbody className="bg-white divide-y divide-gray-200">
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

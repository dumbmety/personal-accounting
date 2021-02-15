import React from 'react'

const TableHead = ({ title, srOnly }) => {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {srOnly ? <span className="sr-only">{title}</span> : title}
    </th>
  )
}

export default TableHead

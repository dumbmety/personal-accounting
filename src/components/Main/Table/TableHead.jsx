import React from 'react'

const TableHead = ({ title, srOnly }) => {
  return (
    <th className="items__header--item">
      {srOnly ? <span className="sr-only">{title}</span> : title}
    </th>
  )
}

export default TableHead

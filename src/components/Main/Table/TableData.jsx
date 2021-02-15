import React from 'react'

import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

const TableData = ({ id, title, amount, type, category, createdAt }) => {
  // Type
  const typeColor = type === 'income' ? 'green' : 'red'
  const typeClasses = `px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${typeColor}-100 text-${typeColor}-800`

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">{id}</td>
      <td className="px-6 py-4 whitespace-nowrap">{title}</td>
      <td className="px-6 py-4 whitespace-nowrap">${amount}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={typeClasses}>{type}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {category.map(item => {
          const classes = `px-2 mr-1 inline-flex text-xs leading-5 font-semibold rounded-full  bg-${item.color}-100 text-${item.color}-800`
          return <span className={classes}>{item.name}</span>
        })}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{createdAt}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <EditButton id={id} />
        <DeleteButton id={id} />
      </td>
    </tr>
  )
}

export default TableData

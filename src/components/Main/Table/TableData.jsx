import React from 'react';

import moment from 'moment';

import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const TableData = ({ id, title, amount, type, categories, createdAt }) => {
  const typeColor = type === 'income' ? 'green' : 'red';

  return (
    <tr>
      <td className="item">{id}</td>
      <td className="item">{title}</td>
      <td className="item">${amount}</td>
      <td className="item">
        <span
          className={`item__type bg-${typeColor}-100 text-${typeColor}-800`}
        >
          {type}
        </span>
      </td>
      <td className="item items__category">
        {categories.map(item => (
          <span
            key={item.id}
            className={`items__category--item bg-${item.color}-100 text-${item.color}-800`}
          >
            {item.name}
          </span>
        ))}
      </td>
      <td className="item">{moment(createdAt).format('ll')}</td>
      <td className="item item__button--wrapper">
        <EditButton id={id} />
        <DeleteButton id={id} />
      </td>
    </tr>
  );
};

export default TableData;

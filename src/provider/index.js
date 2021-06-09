import { createContext, useContext, useState } from 'react';

import { categories } from '../constant';

export const initialValue = {
  data: [
    {
      id: 1,
      title: 'Online shop project',
      amount: 200,
      type: 'Income',
      category: {
        key: 3,
        text: 'Job',
        value: 'job',
        icon: 'briefcase',
        color: 'blue',
      },
      createdAt: '2021-02-06',
    },
    {
      id: 2,
      title: 'Buy a laptop',
      amount: 1000,
      type: 'Cost',
      category: {
        key: 1,
        text: 'Shopping',
        value: 'shopping',
        icon: 'shop',
        color: 'violet',
      },
      createdAt: '2021-03-15',
    },
  ],
  filter: 'all',
  search: '',
  categories: [],
};

export const Context = createContext(initialValue);

export const Provider = ({ children }) => {
  const [data, setData] = useState(initialValue.data);
  const [search, setSearch] = useState(initialValue.search);
  const [filter, setFilter] = useState(initialValue.filter);
  const [openAddModal, setOpenAddModal] = useState(false);

  function handleOpenAddModal() {
    setOpenAddModal(true);
  }

  function handleCloseAddModal() {
    setOpenAddModal(false);
  }

  function changeFilter(name) {
    setFilter(name);
  }

  function getRecord(id) {
    const allData = [...data];
    return allData.find(r => r.id === id);
  }

  function addRecord({ title, amount, type, category }) {
    const allData = [...data];
    allData.push({
      id: allData.length + 1,
      title,
      amount,
      type,
      category,
      createdAt: Date.now(),
    });

    setData(allData);
    setOpenAddModal(false);
  }

  function deleteRecord(id) {
    const allData = [...data];
    allData.splice(id - 1, 1);
    setData(allData);
  }

  function editRecord({ id, title, amount, type, category }) {
    const allData = [...data];
    const recordIndex = allData.findIndex(r => r.id === id);
    const record = allData[recordIndex];
    record.title = title;
    record.amount = amount;
    record.type = type;
    record.category = categories.find(c => c.value === category);

    setData(allData);
  }

  function changeSearch(value) {
    setSearch(value);
  }

  return (
    <Context.Provider
      children={children}
      value={{
        addRecord,
        categories,
        search,
        changeSearch,
        data,
        deleteRecord,
        editRecord,
        filter,
        getRecord,
        changeFilter,
        handleCloseAddModal,
        handleOpenAddModal,
        openAddModal,
      }}
    />
  );
};

export const useDataHandler = () => {
  return useContext(Context);
};

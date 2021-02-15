export const tableHead = [
  { id: 1, srOnly: false, title: '#' },
  { id: 2, srOnly: false, title: 'Title' },
  { id: 3, srOnly: false, title: 'Amount' },
  { id: 4, srOnly: false, title: 'Type' },
  { id: 5, srOnly: false, title: 'Category' },
  { id: 6, srOnly: false, title: 'Created At' },
  { id: 7, srOnly: true, title: 'Actions' }
]

export const tableData = [
  {
    id: 1,
    title: 'Online shop project',
    amount: 200,
    type: 'income',
    category: [{ id: 1, name: 'freelancing', color: 'pink' }],
    createdAt: 'Feb 06, 2021'
  },
  {
    id: 2,
    title: 'Buy a laptop',
    amount: 1000,
    type: 'cost',
    category: [{ id: 1, name: 'apple', color: 'gray' }],
    createdAt: 'Fab 15, 2021'
  }
]

import colorGenerator from './colorGenerator'

const createCategories = categoryList => {
  const categories = []

  categoryList.split(',').map(category => {
    categories.push({
      id: categories.length,
      name: category,
      color: colorGenerator(),
    })
  })

  return categories
}

export default createCategories

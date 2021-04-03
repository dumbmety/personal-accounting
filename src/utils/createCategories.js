import colorGenerator from './colorGenerator'

const createCategories = categoryList => {
  const categories = []

  try {
    if (typeof categoryList === 'string') {
      // eslint-disable-next-line
      categoryList.split(',').map(category => {
        categories.push({
          id: categories.length,
          name: category,
          color: colorGenerator(),
        })
      })
    }
  } catch (err) {
    categories.push({
      id: categories.length,
      name: categoryList[0],
      color: colorGenerator(),
    })
  }

  return categories
}

export default createCategories

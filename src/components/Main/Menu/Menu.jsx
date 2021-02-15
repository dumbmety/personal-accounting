import React from 'react'

import FilterButton from './FilterButton'
import SortButton from './SortButton'
import SearchBox from './SearchBox'
import AddItem from './AddItem'

const Menu = () => {
  return (
    <header className="flex items-center justify-between mb-3 text-gray-600">
      <div className="flex items-center">
        <FilterButton />
        <SortButton />
        <SearchBox />
      </div>
      <div>
        <AddItem />
      </div>
    </header>
  )
}

export default Menu

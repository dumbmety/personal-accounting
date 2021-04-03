import { useContext, useEffect, useState } from 'react'
import { Button, Dropdown } from 'semantic-ui-react'

import Context from '../../context'

const Filter = () => {
  const [filter, setFilter] = useState('all')
  const { categories, filteredData } = useContext(Context)

  useEffect(() => {
    // eslint-disable-next-line
    filteredData(filter)
    // eslint-disable-next-line
  }, [filter])

  return (
    <Dropdown
      pointing="top"
      trigger={<Button active={filter !== 'all'} icon="filter" content="Filter" />}
      icon={null}
      options={categories}
      onChange={(e, data) => setFilter(data.value)}
    />
  )
}

export default Filter

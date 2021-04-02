import { Button, Icon } from 'semantic-ui-react'

const Actions = () => {
  return (
    <div className="header__actions">
      <Button.Group>
        <Button>
          <Icon name="filter" />
          Filter
        </Button>
        <Button>
          <Icon name="sort content descending" />
          Sort
        </Button>
        <Button>
          <Icon name="search" />
          Search
        </Button>
      </Button.Group>
    </div>
  )
}

export default Actions

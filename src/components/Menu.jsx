import { Button, Icon } from 'semantic-ui-react';

function Menu() {
  return (
    <section id="main-menu">
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
      <div>
        <Button color="blue">
          <Icon name="add" />
          Add item
        </Button>
      </div>
    </section>
  );
}

export default Menu;

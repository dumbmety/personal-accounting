import { Button, Icon } from 'semantic-ui-react';
import Filter from './Filter';

export default function Actions() {
  return (
    <div className="header__actions">
      <Button.Group>
        <Filter />
        <Button>
          <Icon name="search" />
          Search
        </Button>
      </Button.Group>
    </div>
  );
}

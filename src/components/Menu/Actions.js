import { Button } from 'semantic-ui-react';

import Filter from './Filter';
import Search from './Search';

export default function Actions() {
  return (
    <div className="header__actions">
      <Button.Group>
        <Filter />
        <Search />
      </Button.Group>
    </div>
  );
}

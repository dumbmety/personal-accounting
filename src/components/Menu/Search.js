import { Button, Form, Icon, Popup } from 'semantic-ui-react';
import { useDataHandler } from '../../provider';

export default function Search() {
  const { search, changeSearch } = useDataHandler();

  return (
    <Popup
      basic
      on="click"
      size="large"
      position="bottom left"
      trigger={
        <Button>
          <Icon name="search" />
          Search
        </Button>
      }
      content={
        <Form>
          <Form.Field>
            <label htmlFor="search">Search</label>
            <input
              id="search"
              value={search}
              placeholder="Search on title..."
              onChange={e => changeSearch(e.target.value)}
            />
            <p>Note: case sensitive</p>
          </Form.Field>
        </Form>
      }
    />
  );
}

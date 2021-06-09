import { Button, Dropdown } from 'semantic-ui-react';
import { useDataHandler } from '../../provider';

export default function Filter() {
  const { categories, filter, changeFilter } = useDataHandler();
  return (
    <Dropdown
      icon={null}
      pointing="top"
      options={categories}
      defaultValue={filter}
      trigger={<Button icon="filter" content="Filter" />}
      onChange={(event, data) => changeFilter(data.value)}
    />
  );
}

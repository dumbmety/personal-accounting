import { Header } from 'semantic-ui-react';

function Heading() {
  return (
    <header id="main-header">
      <Header as="h1">Personal Accounting</Header>
      <p>
        Created by{' '}
        <a href="https://github.com/neysidev" target="_blank" rel="noreferrer">
          Mehdi Neysi
        </a>
      </p>
    </header>
  );
}

export default Heading;

import 'simplebar/dist/simplebar.min.css';
import { Container } from 'semantic-ui-react';
import { Provider } from '../provider';
import Data from '../components/Data';
import Heading from '../components/Heading';
import Menu from '../components/Menu';
import SimpleBar from 'simplebar-react';

export default function App() {
  const style = { height: '100vh', padding: '5rem' };
  return (
    <SimpleBar style={style}>
      <Provider>
        <Container>
          <Heading />
          <Menu />
          <Data />
        </Container>
      </Provider>
    </SimpleBar>
  );
}

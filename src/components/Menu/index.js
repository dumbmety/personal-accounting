import Actions from './Actions';
import Add from './Add';

export default function Menu({ id }) {
  return (
    <section id="main-menu">
      <Actions />
      <Add id={id} />
    </section>
  );
}

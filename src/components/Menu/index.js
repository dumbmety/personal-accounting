import Actions from './Actions'
import Add from './Add'

const Menu = ({ id }) => {
  return (
    <section id="main-menu">
      <Actions />
      <Add id={id} />
    </section>
  )
}

export default Menu

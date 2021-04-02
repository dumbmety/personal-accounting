import Actions from './Actions'
import Add from './Add'

function Menu({ status, open, close, addItem }) {
  return (
    <section id="main-menu">
      <Actions />
      <Add />
    </section>
  )
}

export default Menu

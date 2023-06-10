import './navbar.css'
import logo from '../../assets/logo.png'
import Search from '../search/Search'
import { Tooltip } from 'react-tooltip'

function Navbar({ homePage, libraryPage }) {

  return (
    <header>
      <section className="__navbar-elements">
        <img className="__navbar-logo" src={logo} alt="logo" onClick={homePage} />
        <Search />
      </section>

      <section className="__navbar-elements navigation">
        <a onClick={homePage}>Home</a>
        <a onClick={libraryPage}>Library</a>
        <a data-tooltip-id="my-tooltip" data-tooltip-content="In development!">Community</a>
        <a data-tooltip-id="my-tooltip" data-tooltip-content="In development!">Blog</a>
      </section>

      <section className="__navbar-elements buttons">
        <a data-tooltip-id="my-tooltip" data-tooltip-content="In development!" className="button button-primary"><b>Login</b></a>
        <a data-tooltip-id="my-tooltip" data-tooltip-content="In development!" className="button button-secondary"><b>Register</b></a>
      </section>
      <Tooltip id="my-tooltip" />
    </header>
  )
}

export default Navbar
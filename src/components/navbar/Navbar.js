import './navbar.css'
import logo from '../../assets/logo.png'
import Search from '../searchbar/Search'

function Navbar({homePage, libraryPage}) {
  return (
    <header>
      <section className="__navbar-elements">
      <img className="__navbar-logo" src={logo} alt="logo" />
        <Search />
      </section>

      <section className="__navbar-elements">
        <div onClick={homePage}>Home</div>
        <div onClick={libraryPage}>Library</div>
        <div>Community</div>
        <div>Blog</div>
      </section>
      
      <section className="__navbar-elements">
        <div className="button button-primary"><b>Login</b></div>
        <div className="button button-secondary"><b>Register</b></div>
      </section>
    </header>
  )
}

export default Navbar
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
        <button onClick={homePage}>Home</button>
        <button onClick={libraryPage}>Library</button>
        <button>Community</button>
        <button>Blog</button>
      </section>
      
      <section className="__navbar-elements">
        <button>Login</button>
        <button>Register</button>
      </section>
    </header>
  )
}

export default Navbar
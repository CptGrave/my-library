import './header.css'
import React from 'react'
import logo from '../../icons/logo.png'
import Search from '../Search'

function Header() {
  return (
    <header>
      <img className="__header-logo" src={logo} alt="logo">
      </img>
     {/*  <section className="__header-links">
        <a>Catalog</a>
        <a>Community</a>
        <a>Rankings</a>
        <a>Blog</a>
      </section> */}
      <Search />
      <section className="__header-buttons">
        <button>Login</button>
        <button>Register</button>
      </section>

    </header>
  )
}

export default Header
import './header.css'
import React from 'react'
import logo from '../../icons/logo.png'
import ModalSearch from '../ModalSearch'

function Header({homePage, libraryPage}) {
  return (
    <header>
      <section className="__header-elements">
      <img className="__header-logo" src={logo} alt="logo">
      </img>
      <ModalSearch />
      </section>
      <section className="__header-elements">
        <button onClick={homePage}>Home</button>
        <button onClick={libraryPage}>Library</button>
      </section>
      <section className="__header-elements">
        <button>Login</button>
        <button>Register</button>
      </section>
    </header>
  )
}

export default Header
import './navbar.css'
import logo from '../../assets/logo.png'
import ModalSearch from '../searchbar/ModalSearch'
import {useState} from 'react'
import Form from 'react-bootstrap/Form';

function Navbar({homePage, libraryPage}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <header>
      <section className="__navbar-elements">
      <img className="__navbar-logo" src={logo} alt="logo">
      </img>
      <Form className="__navbar-form">
        <Form.Control
          size="sm"
          type="text"
          placeholder="Search for books..."
          onKeyDown={handleShow}
          onClick={handleShow}
        />
      </Form>
      {show && <ModalSearch showModal={handleShow} closeModal={handleClose}/>}
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
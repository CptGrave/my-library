import './header.css'
import logo from '../../assets/logo.png'
import ModalSearch from '../searchbar/ModalSearch'
import {useState} from 'react'
import Form from 'react-bootstrap/Form';

function Header({homePage, libraryPage}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <header>
      <section className="__header-elements">
      <img className="__header-logo" src={logo} alt="logo">
      </img>
      <Form className="__header-form">
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
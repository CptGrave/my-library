import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Search from './Search';
import Form from 'react-bootstrap/Form';

export default function ModalSearch() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Form className="__modalSearch-form">
        <Form.Control
          size="sm"
          type="text"
          placeholder="Search for books..."
          onKeyDown={handleShow}
          onClick={handleShow}
        />
      </Form>
      <Modal animation={false} show={show} onHide={handleClose}>
        <Modal.Body><Search /></Modal.Body>
      </Modal>
    </>
  );
}
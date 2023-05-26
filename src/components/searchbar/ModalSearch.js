import Modal from 'react-bootstrap/Modal';
import Search from './Search'

export default function ModalSearch({showModal,closeModal}) {

  return (
    <>
      <Modal /* set custom css dialogClassName="modal" */ size="lg" animation={false} show={showModal} onHide={closeModal}>
        <Modal.Body><Search /></Modal.Body>
      </Modal>
    </>
  );
}
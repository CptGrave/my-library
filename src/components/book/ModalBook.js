import React from 'react'
import ShowMoreText from "react-show-more-text";
import { Rating } from 'react-simple-star-rating'
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

function ModalBook({ id, handleClose, showModal, title, img, snippet, rating, setRating, author, onDelete, addedOn}) {

  return (
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="" >
      <div className="" data-id={id}>
        <Image src={img} style={{
          width: "10rem",
          height: "13.3rem"
        }} />
        <p className="lead">{author}</p>
        <ShowMoreText
          more="More description"
          less="Less description"
        >
          {snippet}
        </ShowMoreText>
        <Rating
          onClick={setRating}
          iconsCount={5}
          transition={true}
          initialValue={rating}
          size={32}
          fillColor={"#00605B"}
        />
        <p>Added to library on: {addedOn}</p>
      </div>
      <Button
        size="sm"
        variant="outline-secondary"
        onClick={onDelete}
      >
        Delete book
      </Button>
    </div>
        </Modal.Body>
      </Modal>
    
  )
}

export default ModalBook
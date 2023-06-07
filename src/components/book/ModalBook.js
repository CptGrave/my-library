import React from 'react'
import ShowMoreText from "react-show-more-text";
import { Rating } from 'react-simple-star-rating'
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

function ModalBook({ ratingsCount, averageRating, buyLink, publishedDate, id, handleClose, showModal, title, img, snippet, rating, setRating, author, onDelete, addedOn }) {
  const style = {
    marginTop: "1rem"
  }
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
            <h5 style={style}>{author}</h5>
            <ShowMoreText
              more="More description"
              less="Less description"
            >
              {snippet}
            </ShowMoreText>
            {buyLink && <p style={style}>Buy this book {<a href={buyLink} target="_blank">here</a>}</p>}
            {averageRating && <p style={style}>Average google books rating: {averageRating}/5 ({ratingsCount})</p>}
            <Rating
              style={style}
              onClick={setRating}
              iconsCount={5}
              transition={true}
              initialValue={rating}
              size={32}
              fillColor={"#00605B"}
            />
            <p style={style}>Published date: {publishedDate}</p>
            <p style={style}>Added to library on: {addedOn}</p>
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
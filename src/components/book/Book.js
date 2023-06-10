import './book.css'
import React from 'react'
import Image from 'react-bootstrap/Image';
import { Rating } from 'react-simple-star-rating'

export default function Book({ id, getModal, title, img, rating, author, addedOn }) {
  return (
    <div className="__book" data-id={id}>
      <Image src={img} className="__book-image" />

      <div className="__book-details">
        <div className="__book-details-top">
          <div className="__book-details-title">{title}</div>
          <div className="__book-details-authors">{author}</div>
        </div>

        <div className="__book-details-bottom">
          <div className="d-flex justify-content-between">
            {
              rating == 0 ?
                <div className="__book-clickable"
                  onClick={() => getModal(id)}>
                  Add rate!
                </div> :
                <Rating
                  readonly={true}
                  iconsCount={rating}
                  size={24}
                  emptyColor={"#00605B"}
                />
            }
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => getModal(id)} 
            >
              See more
            </button>
          </div>
          
          <div className="fw-lighter">Added: {addedOn}</div>
        </div>
      </div>
    </div>
  )
}
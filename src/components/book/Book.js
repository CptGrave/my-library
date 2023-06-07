import './book.css'
import React from 'react'
import Image from 'react-bootstrap/Image';
import { Rating } from 'react-simple-star-rating'

export default function Book({ id, getModal, title, img, rating, author, addedOn }) {
  const style = {
    marginTop: "-1rem"
  }
  return (
    <div className="__book-container" >
      <div className="__book" data-id={id}>
        <Image src={img} onClick={getModal} className="rounded" style={{
          width: "10rem",
          height: "13.3rem"
        }} />
        <p className="lead">{author}</p>
        <b><h4>{title}</h4></b>
        <p>My rate:</p>
        {rating == 0 ?
          <p className="__book-clickable"
            onClick={getModal}>
            Add rate!
          </p> :
          <Rating
            style={style}
            readonly={true}
            iconsCount={rating}
            size={32}
            emptyColor={"#00605B"}
          />}

        <p className="__book-addedon">Added to library on: {addedOn}</p>
      </div>
    </div>
  )
}

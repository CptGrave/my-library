import './book.css'
import React from 'react'
import ShowMoreText from "react-show-more-text";
import { Rating } from 'react-simple-star-rating'
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function Book({ id, getModal, title, img, snippet, rating, setRating, author, onDelete, addedOn }) {
  return (
    <div className="__book-container" >
      <div className="__book" data-id={id}>
        <Image src={img} onClick={getModal} className="rounded" style={{
          width: "10rem",
          height: "13.3rem"
        }} />
        <p className="lead">{author}</p>
        <b><h4>{title}</h4></b>
        <p>My rate {rating}</p>
        <p>Added to library on: {addedOn}</p>
      </div>
    </div>
  )
}

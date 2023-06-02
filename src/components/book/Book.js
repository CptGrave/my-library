import './book.css'
import React from 'react'
import ShowMoreText from "react-show-more-text";
import { Rating } from 'react-simple-star-rating'
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function Book({ title, img, snippet, rating, setRating, author, onDelete, addedOn }) {
  return (
    <div className="__book-container">
      <div className="book">
        <Image src={img} className="rounded" style={{
          width: "10rem",
          height: "13.3rem"
        }} />
        <p className="lead">{author}</p>
        <b><h4>{title}</h4></b>
        <ShowMoreText
          more="More description"
          less="Less description"
        >
          {snippet}
        </ShowMoreText>

        <p>My rate in stars</p>

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
  )
}

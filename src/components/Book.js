import React from 'react'
import ShowMoreText from "react-show-more-text";
import { Rating } from 'react-simple-star-rating'
import { Button } from 'react-bootstrap';

export default function Book({ title, img, snippet, rating, setRating, onDelete, addedOn }) {
  return(
    <div className="book--container">
      <div className="book">
        <h2>{title}</h2>
        <img src={img}></img>
        <h3>Book description</h3>

        <ShowMoreText
          more="More description"
          less="Less description"
        >
            {snippet}
        </ShowMoreText>

        <p>My rate in stars</p>

        <Rating 
          onClick={setRating}
          iconsCount={10}
          transition={true}
          initialValue={rating}
        />
        <Button 
          size="sm"
          variant="outline-secondary"
          onClick={onDelete}
        >
          Delete book
        </Button>

        <p>Added to library on: {addedOn}</p>
        <p>{rating}</p>
      </div>
    </div>
  )
}

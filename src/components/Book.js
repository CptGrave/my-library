import React from 'react'
import ShowMoreText from "react-show-more-text";
import StarRatingComponent from 'react-star-rating-component';

export default function Book(props) {

  const [rating,setRating] = React.useState([])
  return(
    <div className="book-container">
      <h2>{props.title}</h2>
      <img src={props.img}></img>
      <h3>Book description</h3>
      <ShowMoreText
        more="More description"
        less="Less description">
          {props.snippet}
      </ShowMoreText>
      <p>My rate in stars</p>
      <StarRatingComponent
        name={`Rate ${props.title}`}
        starCount={10}
        value={rating}
        starColor={"#003380"}
        emptyStarColor={"#66a3ff"} />
      <p>Added to library on: date element</p>
    </div>
  )
}
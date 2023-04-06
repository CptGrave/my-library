import React from 'react'
import ShowMoreText from "react-show-more-text";
import Rating from './Rating';

export default function Book(props) {

  return(
    <div className="book--container">
      <div className="book">
        <h2>{props.title}</h2>
        <img src={props.img}></img>
        <h3>Book description</h3>
        <ShowMoreText
          more="More description"
          less="Less description">
            {props.snippet}
        </ShowMoreText>
        <p>My rate in stars</p>
        <Rating rate={props.rating}/>
      
      <p>Added to library on: date element</p>
      </div>
      
    </div>
  )
}
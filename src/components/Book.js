import React from 'react'
import ShowMoreText from "react-show-more-text";
import { Rating } from 'react-simple-star-rating'

export default function Book(props) {
  const [rating, setRating] = React.useState(0)
  const [library,setLibrary] = React.useState(() =>JSON.parse(localStorage.getItem("library")) || []);

  const newRate = (rate) => {
    setRating(rate)
    handleRatingChange()
  }
  
  function handleRatingChange() {
    const newLibrary = []
    for(let i = 0; i < library.length; i++) {
      if(library[i].title === props.title) {
        newLibrary.push({...library[i], rating: rating})
      } else { newLibrary.push({...library[i]})}
    }
    setLibrary(newLibrary)
    localStorage.setItem("library", JSON.stringify(library));
  }
  // memo -> zapisac library w state
  // useMemo()
  /* setState(library)
  // zrobic callback setBookRating(bookId, newRating)
  const setBookRating = (bookId, newRating) => {
    // wyjebac z library ksiazke o id == bookId
    // zmienic w niej rating na newRating
    // dołożyć ksiazke zmieniona do nowego library
    // setState(newLibrary)
    // localstorage.setitem
    newLibrary = []
  } */
    /* const newLibrary = []
    for(let i = 0; i < library.length; i++) {
      if(library[i].title === props.title) {
        newLibrary.push({...library[i], rating: handleRating(rate)})
      } else { newLibrary.push({...library[i]})}
    }
    setLibrary(newLibrary)
    localStorage.setItem("library", JSON.stringify(library)); */

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
        <Rating 
        onClick={newRate}
        iconsCount={10}
        transition={true}
        initialValue={props.rating}
          />
      <p>Added to library on: date element</p>
      <p>{props.rating}</p>
      </div>
    </div>
  )
}
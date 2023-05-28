import './justadded.css'
import useLibrary from '../../hooks/useLibrary'
import React from 'react'
import arrow from '../../../src/assets/arrow.png'

function JustAdded() {
  const { books } = useLibrary();

  const slideLeft = () => {

  }

  const slideRight = () => {
    
  }
  const justAddedBooks = books.map(book => {
    return (
      <div key={book.id} className="__justadded-book">
        <div className="__justadded-book-img">
          <img src={book.image}></img>
        </div>
        <p>{book.author}</p>
        <p>{book.title}</p>
      </div>
    )
  })
  return (
    <>
      <h5>Just added</h5>
      <div className="__justadded-container wrapper">
        <div className="__justadded-arrow left" onClick={slideLeft}>
          <img src={arrow}></img>
        </div>
        <div className="__justadded-container">
          {justAddedBooks}
        </div>
        <div className="__justadded-arrow" onClick={slideRight}>
          <img src={arrow}></img>
        </div>
      </div>
    </>
  )
}

export default JustAdded
import './justadded.css'
import useLibrary from '../../hooks/useLibrary'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function JustAdded() {
  const { books } = useLibrary();
  const justAddedBooks = books.map(book => {
    return(
      <div key={book.id} className="__justAdded-book">
        <img src={book.image}></img>
        <h5>{book.author}</h5>
        <h3>{book.title}</h3>
      </div>
    )
  })
  return (
    <div className='__justadded-container'>
      <h3>Just added</h3>
      {justAddedBooks}
    </div>
  )
}

export default JustAdded
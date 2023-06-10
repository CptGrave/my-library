import './justadded.css'
import useLibrary from '../../hooks/useLibrary'
import React from 'react'
import arrow from '../../../src/assets/arrow.png'
import Image from 'react-bootstrap/Image';

function JustAdded() {
  const { books, sortedBooks } = useLibrary();
  const [n, setN] = React.useState(5)
  const [m, setM] = React.useState(0)
  const slideLeft = () => {
    setM(oldM => oldM - 5)
    setN(oldN => oldN - 5)
  }

  const slideRight = () => {
    setN(oldN => oldN + 5)
    setM(oldM => oldM + 5)
  }

  const justAddedBooks = () => {
    return sortedBooks.slice(m, n).map(book => {
      return (
          <div className="__justadded-book" key={book.id}>
            <Image src={book.image} className="__justadded-image" />
            <div className="__justadded-details">
              <div className="__justadded-details-title">{book.title}</div>
              <div className="__justadded-details-authors">{book.author}</div>
            </div>
          </div>
      )
    })
  }

  React.useEffect(() => {
    setSlicedArray(justAddedBooks)
  }, [m])

  const [slicedArray, setSlicedArray] = React.useState(justAddedBooks)
  return (
    <div>
      <h5><b>Just added</b></h5>
      {m >= 5 && <div className="__justadded-arrow left" onClick={slideLeft}>
        <img src={arrow}></img>
      </div>}
        <div className="__justadded-container">
          {slicedArray}
        </div>
      {books.length > 5 && n <= 5 && <div className="__justadded-arrow right" onClick={slideRight}>
        <img src={arrow}></img>
      </div>}
    </div>
  )
}

export default JustAdded
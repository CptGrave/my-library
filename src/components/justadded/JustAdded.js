import './justadded.css'
import useLibrary from '../../hooks/useLibrary'
import React from 'react'
import arrow from '../../../src/assets/arrow.png'
import Image from 'react-bootstrap/Image';

function JustAdded() {
  const { books } = useLibrary();
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
    return books.slice(m, n).map(book => {
      return (
        <div key={book.id} className="__justadded-book">
          <div className="__justadded-book-img">
            <Image src={book.image} thumbnail style={{
              width: "10rem",
              height: "13.3rem"
            }} />
          </div>
          <div className="__justadded-book-info">
            <p className="__justadded-book-author lead">{book.author}</p>
            <b><p className="__justadded-book-title">{book.title}</p></b>
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
    <>
      <div>
        <h5><b>Just added</b></h5>
        {m >= 5 && <div className="__justadded-arrow left" onClick={slideLeft}>
          <img src={arrow}></img>
        </div>}
        <div className="__justadded-container wrapper">
          <div className="__justadded-container">
            {slicedArray}
          </div>
        </div>
        {n <= 5 && <div className="__justadded-arrow right" onClick={slideRight}>
          <img src={arrow}></img>
        </div>}
      </div>
    </>
  )
}

export default JustAdded
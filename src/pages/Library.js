import Book from '../components/book/Book'
import useLibrary from "../hooks/useLibrary";
import Sorting from '../components/sorting/Sorting'
import Minichart from '../components/minichart/Minichart';
import ModalBook from '../components/book/ModalBook';
import {useState} from 'react'

export default function Library() {
  const { books, rateBook, deleteBook, sortBy } = useLibrary();

  const [modalBook, setModalBook] = useState(books[0])
  const [showModal,setShowModal] = useState(false)

  const getModal = (event) => {
    const id = event.target.parentNode.getAttribute('data-id')
    setModalBook(books.filter( book => book.id == id))
    setShowModal(true)
  }
  

  const libraryList = books.map(book => {
    return (
      <Book
        img={book.image}
        author={book.author.toString()}
        key={book.id}
        id={book.id}
        title={book.title}
        snippet={book.snippet}
        rating={book.rating}
        setRating={rating => {
          rateBook(book, rating);
        }}
        onDelete={() => {
          deleteBook(book)
        }}
        addedOn={book.addedOn}
        getModal={getModal}
      />
    )
  });

  return (
    <div className="__library-container">
      <div className="__library-menu">
        <Sorting sortBy={sortBy} />
        <Minichart />
      </div><div>
        <h5><b>My library</b></h5>
        <div className="__library-list">
          {libraryList}
        </div>
      </div>
      {showModal && <ModalBook
        img={modalBook[0].image}
        author={modalBook[0].author.toString()}
        key={modalBook[0].id}
        id={modalBook[0].id}
        title={modalBook[0].title}
        snippet={modalBook[0].snippet}
        rating={modalBook[0].rating}
        setRating={rating => {
          rateBook(modalBook[0], rating);
        }}
        onDelete={() => {
          deleteBook(modalBook[0])
        }}
        addedOn={modalBook[0].addedOn}
        showModal={showModal}
        handleClose={setShowModal}/> }
      
    </div>
  );
}

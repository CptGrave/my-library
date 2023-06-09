import './search.css'
import React, { useCallback, useState } from 'react';
import debounce from 'lodash.debounce'
import Form from 'react-bootstrap/Form';
import BooksAccordion from '../booksaccordion/BooksAccordion'
import useLibrary from '../../hooks/useLibrary';

const filterBooks = (books) => {
  return books.filter((book) => {
    return book.image && book.snippet;
  })
}

export default function Search() {
  const [books, setBooks] = useState([]);
  const library = useLibrary();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const inputHandler = async (e) => {
    const query = e.target.value;
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${query}`);
    const data = await response.json();

    if (data.items) {
      const foundBooks = data.items.map(item => ({
        title: item.volumeInfo?.title,
        id: item.id,
        image: item.volumeInfo?.imageLinks?.smallThumbnail,
        snippet: item.volumeInfo?.description,
        rating: 0,
        author: item.volumeInfo?.authors,
        buyLink: item.saleInfo?.buyLink,
        averageRating: item.volumeInfo?.averageRating,
        ratingsCount: item.volumeInfo?.ratingsCount,
        publishedDate: item.volumeInfo?.publishedDate
      }));
      setBooks(filterBooks(foundBooks));
    } else {
      setBooks([]);
    }
  }

  const debouncedInputHandler = useCallback(
    debounce(inputHandler, 300),
    []
  );

  return (
    <div className="__search-form">
      {isOpen &&
        <div
          className="__search-overlay"
          onClick={handleClose}
        ></div>
      }

      <Form className="__navbar-form ">
        <Form.Control
          size="sm"
          type="text"
          placeholder="Search for books..."
          onInput={debouncedInputHandler}
          onFocus={handleOpen}
        />
      </Form>
      {isOpen &&
        <div className="__search-result">
          <BooksAccordion books={books} libraryBooks={library.books} addBook={library.addBook} />
        </div>
      }
    </div>


  )
}
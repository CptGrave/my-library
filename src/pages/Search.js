import React, { useCallback, useState } from 'react';
import debounce from 'lodash.debounce'
import Form from 'react-bootstrap/Form';
import BooksAccordion from '../components/BooksAccordion';

export default function Search() {
  const [books, setBooks] = useState([]);

  const [library,setLibrary] = useState(() =>JSON.parse(localStorage.getItem("library")) || []);

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
      }));
      setBooks(foundBooks);
    } else {
      setBooks([]);
    }
  }
  
  const debouncedInputHandler = useCallback(
    debounce(inputHandler, 300),
    []
  );

  const addBook = async (book) => {
    setLibrary(oldLibrary => {
      return [...oldLibrary, book]
    })
  }

  React.useEffect(() => {
    localStorage.setItem("library", JSON.stringify(library));
  }, [library])

  return (
    <>
      <Form>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Search for books..."
          autoFocus
          onInput={debouncedInputHandler}
          className="mb-3"
        />
      </Form>

      <BooksAccordion books={books} addBook={addBook} />
    </>
  )
}

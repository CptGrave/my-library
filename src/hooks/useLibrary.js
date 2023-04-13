import { useState, useEffect } from 'react';

export default function useLibrary() {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem("library")));

  useEffect(() => {
    localStorage.setItem("library", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    // Don't add books that are already there
    if (books.find(otherBook => otherBook.id === book.id)) {
      return;
    }

    setBooks(oldBooks => {
      const date = new Date().toLocaleDateString("PL")
      return [...oldBooks, {...book, addedOn: date }]
    })
  }

  const rateBook = (book, rating) => {
    setBooks(
      books.map(otherBook => {
        if (book.id == otherBook.id) {
          return {
            ...otherBook,
            rating
          }
        } else {
          return otherBook
        }
      })
    );
  }

  const deleteBook = (book) => {
    setBooks(books.filter((otherBook) => {
      return book.id !== otherBook.id;
    }))
  }


  return {
    books,
    addBook,
    rateBook,
    deleteBook
  }
}

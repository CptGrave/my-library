import { useState, useEffect } from 'react';

export default function useLibrary() {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem("library")));

  useEffect(() =>{ 
    localStorage.setItem("library", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    // Don't add books that are already there
    if (books.find(otherBook => otherBook.id === book.id)) {
      return;
    }

    setBooks(oldBooks => {
      // Add date information to book
      const date = new Date().toLocaleDateString("PL")
      return [...oldBooks, {...book, addedOn: date }]
    })
  }

  const rateBook = (book, rating) => {
    // Rate book with star
    setBooks(
      books.map(otherBook => {
        if (book.id === otherBook.id) {
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
    // Delete book from library
    setBooks(books.filter((otherBook) => {
      return book.id !== otherBook.id;
    }))
  }

  // Sort books by given criteria
  const sortBy = (event) => {
    if(event.target.value === "title") {
      setBooks(oldBooks => [...oldBooks].sort((a, b) => a.title.localeCompare(b.title))) 
    } else if (event.target.value === "date") {
      setBooks(oldBooks =>[...oldBooks].sort((a, b) => b.addedOn.localeCompare(a.addedOn)))
    } else if (event.target.value === "rate") {
      setBooks(oldBooks => [...oldBooks].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)))
    } else if (event.target.value === "author") {
      setBooks(oldBooks => [...oldBooks].sort((a,b) => (a.author[0] > b.author[0]) ? 1 : ((b.author[0] > a.author[0]) ? -1 : 0)))
    }
  }

  return {
    books,
    addBook,
    rateBook,
    deleteBook,
    sortBy
  }
}

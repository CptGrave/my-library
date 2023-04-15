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
    // Delete book from library
    setBooks(books.filter((otherBook) => {
      return book.id !== otherBook.id;
    }))
  }
   // Sort saved books FINISH SORTING!
   // Try adding sort state, and update in effect
  const sortBy = (event) => {
    const param = event.target.value
    if(param == "title") {
      setBooks(oldBooks => oldBooks.sort((a, b) => a.title.localeCompare(b.title)))
    } else if (param == "date") {
      setBooks(oldBooks => oldBooks.sort((a, b) => b.title.localeCompare(a.title)))
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

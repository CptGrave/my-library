import { useState, useEffect, useMemo } from 'react';

export default function useLibrary() {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('library')) || []);
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    localStorage.setItem('library', JSON.stringify(books));
  }, [books]);

  const sortedBooks = useMemo(() => {
    if (sortBy === "title") {
      return [...books].sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortBy === "date") {
      return [...books].sort((a, b) => b.addedOn.localeCompare(a.addedOn))
    } else if (sortBy === "rate") {
      return [...books].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    } else if (sortBy === "author") {
      return [...books].sort((a, b) => (a.author[0] > b.author[0]) ? 1 : ((b.author[0] > a.author[0]) ? -1 : 0))
    }
  }, [books, sortBy]);

  const rates = useMemo(() => {
    const allRates = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }
    const data = []
    books.map(book => {
      data.push(book.rating)
    })
    data.forEach(function (i) { allRates[i] = (allRates[i] || 0) + 1; });
    return (Object.values(allRates))
  }, [books])

  const addBook = (book) => {
    // Don't add books that are already there
    if (books.find(otherBook => otherBook.id === book.id)) {
      return;
    }

    setBooks(oldBooks => {
      // Add date information to book
      const date = new Date().toLocaleDateString("PL")
      return [...oldBooks, { ...book, addedOn: date }]
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

  return {
    books,
    addBook,
    rateBook,
    deleteBook,
    rates,
    setSortBy,
    sortBy,
    sortedBooks,
  }
}

import Book from "../components/Book"
import React from "react"

export default function Library(props) {

  const library = JSON.parse(localStorage.getItem("library"))

  const libraryList = library.map(book=> {
    return  <Book 
              img={book.image}
              key={book.id} 
              title={book.title} 
              snippet={book.snippet} 
              rating={book.rating}
    />
  })
  
  return(
    <div>
      {libraryList}
    </div>
  )
}
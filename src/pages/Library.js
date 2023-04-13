import Book from "../components/Book";
import useLibrary from "../hooks/useLibrary";

export default function Library() {
  const { books, rateBook, deleteBook } = useLibrary();

  const libraryList = books.map(book => {
    return (
      <Book
        img={book.image}
        key={book.id} 
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
      />
    )
  });
  
  return(
    <div>
      {libraryList}
    </div>
  );
}

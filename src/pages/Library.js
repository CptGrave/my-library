import Book from '../components/book/Book'
import useLibrary from "../hooks/useLibrary";
import Sorting from '../components/sorting/Sorting'


export default function Library() {
  const { books, rateBook, deleteBook, sortBy } = useLibrary();

  const libraryList = books.map(book => {
    return (
      <Book
        img={book.image}
        author={book.author.toString()}
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

  return (
    <div className="__library-container">
      <div className="__library-menu">
      <Sorting sortBy={sortBy} />
      </div>
      <div className="__library-list">
        {libraryList}
      </div>
    </div>
  );
}

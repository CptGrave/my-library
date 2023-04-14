import Book from "../components/Book";
import useLibrary from "../hooks/useLibrary";
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

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
    <>
    <p>Sort books by</p>
    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1}>
          Title
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Author
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Rate
        </ToggleButton>
        <ToggleButton id="tbg-radio-4" value={4}>
          Date
        </ToggleButton>
      </ToggleButtonGroup>
    <div className="library--list">
      {libraryList}
    </div>
    </>
  );
}

import Book from '../components/book/Book'
import useLibrary from "../hooks/useLibrary";
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

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
  
  return(
    <>
    <p>Sort books by</p>
    <ToggleButtonGroup type="radio" name="options" defaultValue={"date"}>
        <ToggleButton id="tbg-radio-4" value={"date"} onChange={(event)=>sortBy(event)}>
          Date
        </ToggleButton>
        <ToggleButton id="tbg-radio-1" value={"title"} onChange={(event)=>sortBy(event)}>
          Title
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={"author"} onChange={(event)=>sortBy(event)}>
          Author
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={"rate"} onChange={(event)=>sortBy(event)}>
          Rate
        </ToggleButton>
        
      </ToggleButtonGroup>
    
    <div className="library--list">
      {libraryList}
    </div>
    </>
  );
}

import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ShowMoreText from "react-show-more-text";

export default function BooksAccordion({ books, addBook, libraryBooks }) {
  return (
    <Accordion
      defaultActiveKey={books.length ? books[0].id : null}
      className="mb-3"
    >
      {books.map(book => {
        return (
          <Accordion.Item eventKey={book.id}>
            <Accordion.Header>{book.title}</Accordion.Header>
            <Accordion.Body>
              {book.image && <Image src={book.image} thumbnail className='float-start me-2 mb-2' />}
              <p className="clearfix">
              <ShowMoreText
          more="More description"
          less="Less description"
        >
            {book.snippet}
        </ShowMoreText>
              </p>
              {
                (libraryBooks.find(libraryBook => libraryBook.id === book.id)) ?
                  <Button disabled variant="secondary">Already in library</Button> :
                  <Button onClick={() => addBook(book)}>Add to my library!</Button>
              }
              
            </Accordion.Body>
          </Accordion.Item>
        )
      })}
      
    </Accordion>
  );
}

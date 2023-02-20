import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function BooksAccordion({ books, addBook }) {
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
                {book.snippet}
              </p>
              {/* Schować przycisk jak już będzie książka w library */}
              <Button onClick={() => addBook(book)}>Add to my library!</Button>
            </Accordion.Body>
          </Accordion.Item>
        )
      })}
      
    </Accordion>
  );
}

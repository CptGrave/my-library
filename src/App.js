import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Header from './components/header/Header'
import Search from './components/Search';
import Library from './pages/Library'

const SEARCH_PAGE = "Search"
const LIBRARY_PAGE = "Library"

function App() {
  const [page, setPage] = useState(SEARCH_PAGE);
  return (
    <>
    <Header />
    <div className="container">
      
      <h1 className="mb-3">
        My Library - {page}

        <div className="float-end">
          <Button onClick={() => setPage(SEARCH_PAGE)}>{SEARCH_PAGE}</Button>
          <Button onClick={() => setPage(LIBRARY_PAGE)}>{LIBRARY_PAGE}</Button>
        </div>

      </h1>
      {page === LIBRARY_PAGE && <Library />}
    </div>
    </>
  );
}

export default App;

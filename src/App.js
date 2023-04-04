import { useCallback, useState } from 'react';
import { Button } from 'react-bootstrap';
import Search from './pages/Search';

const SEARCH_PAGE = "Search"
const LIBRARY_PAGE = "Library"

function App() {
  const [page, setPage] = useState(SEARCH_PAGE);
  return (
    <div className="container">
      <h1 className="mb-3">
        My Library - {page}

        <div class="float-end">
          <Button onClick={() => setPage(SEARCH_PAGE)}>{SEARCH_PAGE}</Button>
          <Button onClick={() => setPage(LIBRARY_PAGE)}>{LIBRARY_PAGE}</Button>
        </div>
        
      </h1>
      {page === SEARCH_PAGE && <Search />}
    </div>
  );
}

export default App;

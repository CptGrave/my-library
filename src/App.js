import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Header from './components/header/Header'
import Library from './pages/Library'

const HOME_PAGE = "Home"
const LIBRARY_PAGE = "Library"

function App() {
  const [page, setPage] = useState(HOME_PAGE);
  return (
    <>
    <Header homePage={()=>{setPage(HOME_PAGE)}} libraryPage={()=>{setPage(LIBRARY_PAGE)}}/>
    <div className="container">
      <h1 className="mb-3">
        Reeds - {page}
      </h1>
      {page === LIBRARY_PAGE && <Library />}
    </div>
    </>
  );
}

export default App;

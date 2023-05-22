import { useState } from 'react';
import Header from './components/header/Header'
import Library from './pages/Library'

const HOME_PAGE = "Home"
const LIBRARY_PAGE = "Library"

function App() {
  const [page, setPage] = useState(HOME_PAGE);
  return (
    <>
    <Header homePage={()=>{setPage(HOME_PAGE)}} libraryPage={()=>{setPage(LIBRARY_PAGE)}}/>
    {page === LIBRARY_PAGE && <Library />}
    </>
  );
}

export default App;

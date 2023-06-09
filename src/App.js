import { useState } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Library from './pages/Library'
import Home from './pages/Home';


const HOME_PAGE = "Home"
const LIBRARY_PAGE = "Library"

function App() {
  const [page, setPage] = useState(HOME_PAGE);
  
  return (
    <>
    <Navbar homePage={() => setPage(HOME_PAGE)} libraryPage={() => setPage(LIBRARY_PAGE) }/>
    {page === LIBRARY_PAGE && <Library />}
    {page === HOME_PAGE && <Home />}
    </>
  );
}

export default App;
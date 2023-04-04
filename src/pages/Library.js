import Book from "../components/Book"
export default function Library(props) {

  const library = JSON.parse(localStorage.getItem("library"))
  const libraryList = library.map(book=> {
    return  <Book img={book.image} key={book.id} title={book.title} snippet={book.snippet}/>
  })
  return(
    <div>
      {libraryList}
    </div>
  )
}
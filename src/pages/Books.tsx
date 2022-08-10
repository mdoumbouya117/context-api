import React from 'react'
import Book from '../components/Book';
import Loader from '../components/Loader';
import { getBooks, IBook } from '../services/bookService';

export default function Books() {
    const [books, setBooks] = React.useState<IBook[]>([])
    const [booksLoading, setBooksLetloading] = React.useState(false)

    const loadBooks = async () => {
      setBooksLetloading(true)
        const bookList = await getBooks()
      setBooksLetloading(false)
        setBooks(bookList)
    }

    React.useEffect(() => {
        loadBooks()
    }, [])

  return (
    <div>
      <h1>Books</h1>
        <ul className='list'>
        {!booksLoading && books.length > 0 ? books.map((book: IBook) => <Book key={book.isbn} book={book}/>) : <Loader />}
        </ul>
    </div>
  )
}

import { BooksCard } from "./BooksCard"
import styles from "./style.module.scss"

export const BooksList = ({ search, booksResult })=>{
    return(
        <div className={styles.booksBox}>
            <span className="paragraph1">Livros listados: {booksResult.length} </span>
            {search ? <p className="paragraph1">Resultados para {search}</p> : ""}

            {booksResult.length > 0 ?
            <ul className={styles.booksList}>
            {booksResult.map(book =>(
                <BooksCard key={book.id} book={book}/>
            ))}
        </ul>
        :
        <p className="paragraph2">Nenhum resultado encontrado!</p>}
        </div>
    )
}
import styles from "./style.module.scss"
export const BooksCard = ({ book })=>{
    return(
        <li className={styles.cardSection}>
            <div className={styles.subSection}>
                <h2 className="title2">{book.name}</h2>
                <p className="paragraph1">{book.category}</p>
            </div>
            <span className="paragraph2">{book.price.toLocaleString('pt-BR', {style:"currency", currency:"BRL"})}</span>
        </li>
    )
}
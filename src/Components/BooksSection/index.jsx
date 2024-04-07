import { useState } from "react"
import { BooksList } from "./BooksList"
import { Filters } from "./Filters"
import { books } from "../../data/books"
import styles from "./style.module.scss"

export const BooksSection = () => {

    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")

    const booksResult = books.filter(book => {
        const searchFilter = search === "" ? true :

            book.name.toLowerCase().includes(search.toLowerCase())
            || book.category.toLowerCase().includes(search.toLowerCase())

        const categoryFilter = category === "" ? true : book.category === category

        const minPriceFilter = min === "" ? true : book.price > Number(min)
        const maxPriceFilter = max === "" ? true : book.price <= Number(max)

        return searchFilter && categoryFilter && minPriceFilter && maxPriceFilter
    })

    const cleanFilters = () => {
        setSearch("")
        setCategory("")
        setMin("")
        setMax("")
    }
    return (
        <section>
            <div className={`${styles.bookSection} container`}>
                <Filters
                    cleanFilters={cleanFilters}
                    setSearch={setSearch}
                    setCategory={setCategory}
                    min={min}
                    setMin={setMin}
                    max={max}
                    setMax={setMax} />
                <BooksList search={search} booksResult={booksResult} />
            </div>
        </section>
    )
}
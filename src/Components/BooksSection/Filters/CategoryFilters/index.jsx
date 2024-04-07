import { categories } from "../../../../data/categories"
import styles from "./style.module.scss"

export const CategoryFilters = ({ setCategory })=>{
    return(
        <div className={styles.categoryFilters}>
            <h2 className="title2">Filtrar por categoria</h2>
            <ul>
                {categories.map(cat => (
                    <li className="paragraph1" key={cat.id} onClick={()=> setCategory(cat.category)}>
                        {cat.category}
                    </li>
                ))}
            </ul>
        </div>
    )
}
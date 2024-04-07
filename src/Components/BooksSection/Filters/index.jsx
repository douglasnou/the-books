import { CategoryFilters } from "./CategoryFilters"
import { PriceFilters } from "./PriceFilters"
import { SearchFilters } from "./SearchFilters"
import styles from "./style.module.scss"

export const Filters = ({ setCategory, cleanFilters, setSearch, min, setMin, max, setMax })=>{
    return(
        <div className={styles.filterBox}>
            <SearchFilters setSearch={setSearch}/>
            <CategoryFilters setCategory={setCategory}/>
            <PriceFilters min={min} setMin={setMin} max={max} setMax={setMax} />
            <button className="btn-lg" onClick={cleanFilters}>Limpar Filtro</button>
        </div>
    )
}
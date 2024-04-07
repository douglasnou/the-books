import { useState } from "react"
import { MdSearch } from "react-icons/md";
import styles from "./style.module.scss"

export const SearchFilters = ({ setSearch })=>{

    const [value, setValue] = useState("")

    const submit = (e)=>{
        e.preventDefault()
        setSearch(value)
        setValue("")
    }
    return(
        <form onSubmit={submit}>
            <div className={styles.form}>
                <input className="paragraph1 input-lg" type="text" placeholder="Pesquisar..." value={value} onChange={(e)=> setValue(e.target.value)} required />
                <button className="btn-sm" type="submit">
                    <MdSearch size={21}/>
                </button>
            </div>
        </form>
    )
}
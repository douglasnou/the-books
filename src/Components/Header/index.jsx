import LogoBlue from "./../../assets/logoTheBooksBlue.svg"
import styles from "./style.module.scss"

export const Header = ()=>{
    return(
        <header>
            <div className="container">
             <div className={styles.flexBox}>
                 <img src={LogoBlue} alt="Logo books"/>
             </div>
            </div>
        </header>
    )
}
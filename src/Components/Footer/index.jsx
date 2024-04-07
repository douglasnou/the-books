import LogoWhite from "./../../assets/logoTheBooks.svg"
import styles from "./style.module.scss"

export const Footer = ()=>{
    return(
        <footer className={styles.footerSection}>
            <div className={`${styles.subSection} container`}>
                <img src={LogoWhite} alt="Logo Books" />
                <p className="paragraph1 white">Todos os direitos reservados - Kenzie Academy Brasil</p>
            </div>
        </footer>
    )
}
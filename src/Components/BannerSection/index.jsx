import styles from "./style.module.scss"
export const BannerSection = ()=>{
    return(
        <section className={styles.bannerSection}>
            <div className="container">
                <h1 className="title1 white">Econtre o seu livro favorito</h1>
            </div>
        </section>
    )
}
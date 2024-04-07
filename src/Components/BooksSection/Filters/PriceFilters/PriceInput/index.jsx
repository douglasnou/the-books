import styles from "./style.module.scss"
export const PriceInput = ({ id, label, value, setValue }) => {
    return (
        <div className={styles.priceCard}>
            <label className="paragraph1" htmlFor={id}>{label}</label>
            <input className="paragraph1 input-sm" type="number" name={id} id={id} value={value} onChange={(e) => setValue(e.target.value)} min="1" />
        </div>
    )
}
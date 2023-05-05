import styles from "./Card.module.css"

export default function Card() {
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src="/CardImage.png" alt="" />
            <div className={styles.content}>
                <h4 style={{margin: 0}}>Emanuel Hiebeler</h4>
                <p>Developer</p>
            </div>
        </div>
    )
}
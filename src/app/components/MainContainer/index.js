import styles from './styles.module.css'

export default function MainContainer({ children }) {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}
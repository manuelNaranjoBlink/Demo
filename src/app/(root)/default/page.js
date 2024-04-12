import Link from 'next/link';
import styles from './index.module.css'
export default function InitialPage() {
    return <>
        <div className={styles.appbar}>
            <Link className={styles.buttonLink} style={{ color: 'blue' }} href="/login">Login</Link>
            <h1 >Initial Page</h1>
        </div>
    </>
}
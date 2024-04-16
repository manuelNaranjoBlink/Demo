import Link from 'next/link';
import styles from './index.module.css'
export default function InitialPage() {
    return <>
        <div className={styles.appbar}>
            <Link className={styles.buttonLink} href="/login">Login</Link>
            <h1 >Initial Page</h1>
        </div>
    </>
}
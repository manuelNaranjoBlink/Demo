import Link from 'next/link';
import styles from './index.module.css'
export default function InitialPage() {
    return <>
        <div className={styles.appbar}>
            <h1 >Initial Page</h1>
            <div style={{ marginTop: '16px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <Link className={styles.buttonLink} href="/login?domain=blink">Login Blink</Link>
                <Link className={styles.buttonLink} href="/login?domain=saopaulo">Login Sao Paulo</Link>
            </div>
        </div>
    </>
}
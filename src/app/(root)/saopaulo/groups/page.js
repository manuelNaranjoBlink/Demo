import Link from 'next/link';
import { ThemeLibrary } from '../domain.config';


export default () => {

    const styles = ThemeLibrary()

    return (
        <div className={styles.test.container}>
            <Link href="/" className={styles.general.link}>Home Page</Link>
            <span>SaoPaulo Test Page</span>
        </div>
    )
}
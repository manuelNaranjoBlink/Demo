import { ThemeLibrary } from '../domain.config';
import Link from 'next/link';

export default () => {

    const styles = ThemeLibrary()

    return (
        <div className={styles.test.container}>
            <Link href="/" className={styles.general.link}>Home Page</Link>
            <span>Blink Test Page</span>
        </div>
    )
}
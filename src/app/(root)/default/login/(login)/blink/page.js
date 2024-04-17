import Link from 'next/link';
import { login } from '@/lib/login';
import styles from './index.module.css'

export default function LoginPage() {

    return <>
        <div className={styles.appbar}>
            <Link className={styles.buttonLink} href="/resources" >Home</Link>
            <h1 >Blink Login Page</h1>
        </div>
        <form
            action={async (formData) => {
                'use server'
                await login(formData.get("name"), formData.get("password"));
            }}
            className={styles.form}
        >
            <input className={styles.input} type="text" id="name" name="name" placeholder='Username' />
            <input className={styles.input} type="password" id="password" name="password" placeholder='Password' />
            <button className={styles.button} type='submit'>Login</button>
        </form>
    </>
}


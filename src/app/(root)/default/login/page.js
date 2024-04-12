import Link from 'next/link';
import { login } from '@/lib/login';
import styles from './index.module.css'
// import AcmeLogo from '@/app/ui/acme-logo';
// import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {

    return <>
        <div className={styles.appbar}>
            <Link className={styles.buttonLink} style={{ color: 'blue' }} href="/" >Home</Link>
            <h1 >Login Page</h1>
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
    //     return (
    //         <main className="flex items-center justify-center md:h-screen">
    //             <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
    //                 <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
    //                     <div className="w-32 text-white md:w-36">
    //                         <AcmeLogo />
    //                     </div>
    //                 </div>
    //                 <LoginForm />
    //             </div>
    //         </main>
    //     );
}


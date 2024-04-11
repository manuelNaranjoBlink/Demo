import Link from 'next/link';
export default function InitialPage() {
    return <>
        <div>Initial Page</div>
        <Link style={{ color: 'blue' }} href="/login">Login</Link>
    </>
}
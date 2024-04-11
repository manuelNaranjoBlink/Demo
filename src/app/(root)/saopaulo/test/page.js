import Link from 'next/link';


export default () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="/" style={{color: 'blue'}}>Home Page</Link>
            <span>SaoPaulo Test Page</span>
        </div>
    )
}
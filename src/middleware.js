import { NextResponse } from 'next/server'

// const USSER_LOGGED = false
// const DOMAIN =
//     'blink'
// 'saopaulo'

export async function middleware(request) {
    const session = request.cookies.has('session')
    if (session) {
        const { value } = request.cookies.get('session')
        const [DOMAIN, USSER_LOGGED] = value.split('AND')
        if (USSER_LOGGED == 'true') {
            const url = request.nextUrl.clone()
            const urlPath = url.pathname
            if (urlPath.includes('/login')) {
                url.pathname = `/`
                return NextResponse.redirect(url)
            } else {
                url.pathname = `/${DOMAIN}${urlPath}`
                return NextResponse.rewrite(url)
            }
        }
    }
    const url = request.nextUrl.clone()
    const urlPath = url.pathname
    url.pathname = `/default${urlPath}`
    return NextResponse.rewrite(url)
}

export const config = {
    matcher: '/((?!api|_next/static|images|favicon.ico).*)'
};
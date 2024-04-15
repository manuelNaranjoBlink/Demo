import { NextResponse } from 'next/server'

export async function middleware(request) {
    const session = request.cookies.has('session')
    const { value } = session ? request.cookies.get('session') : { value: '' }
    const url = request.nextUrl.clone()
    const urlPath = url.pathname
    if (urlPath.includes('/logout')) {
        url.pathname = `/login`
        const respponse = NextResponse.redirect(url)
        respponse.cookies.delete('session')
        return respponse
    }
    if (value != '') {
        const [DOMAIN, USSER_LOGGED] = value.split('AND')
        if (USSER_LOGGED == 'true') {

            if (urlPath.includes('/login')) {
                url.pathname = `/`
                return NextResponse.redirect(url)
            } else {
                url.pathname = `/${DOMAIN}${urlPath}`
                return NextResponse.rewrite(url)
            }
        }
    }
    url.pathname = `/default${urlPath}`
    return NextResponse.rewrite(url)
}

export const config = {
    matcher: '/((?!api|_next/static|images|favicon.ico).*)'
};
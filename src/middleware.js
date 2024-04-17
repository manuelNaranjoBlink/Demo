import { NextResponse } from 'next/server'

export async function middleware(request) {
    const cookieSession = request.cookies.has('session')
    const cookieDomain = request.cookies.has('domain')
    const session = cookieSession ? request.cookies.get('session').value : ''
    const domain = cookieDomain ? request.cookies.get('domain').value : ''
    const url = request.nextUrl.clone()
    const urlPath = url.pathname
    if (urlPath.includes('/logout')) {
        url.pathname = `/`
        const respponse = NextResponse.redirect(url)
        respponse.cookies.delete('session')
        respponse.cookies.delete('domain')
        return respponse
    }
    if (session != '' && domain != '' && session != undefined && domain != undefined) {
        if (session == 'true') {
            if (urlPath.includes('/login')) {
                url.searchParams.delete('domain')
                url.pathname = `/resources`
                return NextResponse.redirect(url)
            } else {
                url.pathname = `/${domain}${urlPath}`
                return NextResponse.rewrite(url)
            }
        }
    }
    if (urlPath.includes('/login')) {
        const LOGIN_DOMAIN = url.searchParams.get('domain')
        url.pathname = `/default/login/${LOGIN_DOMAIN}`
        const respponse = NextResponse.rewrite(url)
        respponse.cookies.set('domain', `${LOGIN_DOMAIN}`)
        return respponse
    }
    url.pathname = `/default${urlPath}`
    return NextResponse.rewrite(url)
}

export const config = {
    matcher: '/((?!api|_next/static|images|favicon.ico).*)'
};
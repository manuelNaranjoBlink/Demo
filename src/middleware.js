
import { NextResponse } from 'next/server'

export async function middleware(request) {
    const res = await fetch('http://demo7540337.mockable.io/blink');
    const domain = await (res.json())
    const domainToLoad = domain.filter(module => module.active)[0]?.domain;


    const url = request.nextUrl.clone()
    const urlPath = url.pathname
    url.pathname = `/domain/${domainToLoad}${urlPath}`
    return NextResponse.rewrite(url)
}

export const config = {
    matcher: '/((?!api|_next/static|images|favicon.ico).*)'
};
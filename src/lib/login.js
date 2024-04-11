import { redirect } from "next/navigation";
import { cookies } from "next/headers"

const USSER_LOGGED = true

export const login = async (name, password) => {
    // const res = await fetch('http://demo7540337.mockable.io/blink');
    // const domain = await (res.json())
    // const domainToLoad = domain.filter(module => module.active)[0]?.domain; 
    if (name && name.trim() !== '') {
        cookies().set('session', `${name.includes('b') ? 'blink' : 'saopaulo'}AND${USSER_LOGGED}`)
        redirect('/');
    }
}

export const logout = async () => {
    // const res = await fetch('http://demo7540337.mockable.io/blink');
    cookies().set('session', '', { expires: new Date(0) })
    redirect('/login');
}
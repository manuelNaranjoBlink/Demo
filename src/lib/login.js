import { redirect } from "next/navigation";
import { cookies } from "next/headers"

const USSER_LOGGED = true

export const login = async (name, password) => {
    if (name && name.trim() !== '') {
        await cookies().set('session', `${name.includes('b') ? 'blink' : 'saopaulo'}AND${USSER_LOGGED}`)
        redirect('/');
    }
}
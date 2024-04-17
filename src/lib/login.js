import { redirect } from "next/navigation";
import { cookies } from "next/headers"

const USSER_LOGGED = true

export const login = async (name, password) => {
    // if (name && name.trim() !== '') {
        await cookies().set('session', `${USSER_LOGGED}`)
        redirect('/resources');
    // }
}
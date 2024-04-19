import { ComponentsLibrary } from '../domain.config'

export default async function BlinkLogin() {

    const { LoginPage } = await ComponentsLibrary();

    return (
        <LoginPage />
    )
}

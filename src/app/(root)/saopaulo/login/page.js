import { ComponentsLibrary } from '../domain.config'

export default async function MainPage() {

  const { LoginPage } = await ComponentsLibrary();

  return (
    <LoginPage />
  )
}

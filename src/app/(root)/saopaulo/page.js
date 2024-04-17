import { ComponentsLibrary } from './domain.config';
import './saopaulo.css';

export default () => {

  const { ViewBooks } = ComponentsLibrary()

  return (
    <>
      <ViewBooks />
    </>
  )
}
import { ComponentsLibrary } from './domain.config';
import './saopaulo.css';

export default () => {

  const { ViewContent } = ComponentsLibrary()

  return (
    <>
      <ViewContent />
    </>
  )
}
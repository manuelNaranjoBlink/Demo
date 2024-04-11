import { ComponentsLibrary } from './domain.config';
import './blink.css';

export default () => {

  const { ViewContent } = ComponentsLibrary()

  return (
    <>
      <ViewContent />
    </>
  )
}
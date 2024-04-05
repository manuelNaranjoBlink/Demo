import style from './blink.module.css';
import styles from '../../../themes/themeA/index';
import ComponentsLibrary from '../../../libs/libA';

export default async function Saopaulo() {
  // const { styles, components } = useContext(DomainContext);


  return (
    <div className={styles.home.main}>
      <ComponentsLibrary.PersonalizedSpan />
      <div className={style.fondo}>
        <p>BLINK APP</p>
      </div>
    </div>
  )
}
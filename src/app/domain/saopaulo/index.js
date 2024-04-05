'use client'
import { LibrariesContext } from "../../../contexts/LibrariesProvider";
import { useContext } from 'react';
import './saopaulo.css';

export default async function Saopaulo() {
  const { styles, components } = useContext(LibrariesContext);
  const { PersonalizedSpan, Button } = components


  return (
    <div className={styles.home.main}>
      <PersonalizedSpan />
      <Button item={{ text: "Button" }} />
      <div className={"fondo"}>
        <p>BLINK EN SAO PAULO</p>
      </div>
    </div>
  )
}
'use client'
import { LibrariesContext } from "@/contexts/LibrariesProvider";
import { useContext } from 'react';
import './saopaulo.css';

export default async function Saopaulo() {
  const { styles, components } = useContext(LibrariesContext);
  const { AppBar, ViewContent } = components


  return (
    <div className={styles.home.main}>
      <AppBar />
      <ViewContent />
    </div>
  )
}
import Image from "next/image";
import styles from "./page.module.css";
import ActualLibraryComponents from "@/libs/index";
export default function Home() {

  const LibraryComponents = ActualLibraryComponents.getInstance();

  return (
    <main className={styles.main} >
      <LibraryComponents.Button>PROBANDO BOTON DESDE A</LibraryComponents.Button>
      <LibraryComponents.InputNumber />
      <LibraryComponents.CustomText />
    </main>
  );
}

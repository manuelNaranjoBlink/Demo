import Link from "next/link";
import styles from "./page.module.css";
import ComponentsLibrary from "@/libs/index";

export default () => {

  return (
    <main className={styles.main} >
      <ComponentsLibrary.AppBar />
      <Link href={"/prueba"} style={{ marginTop: "32px" }}>Prueba</Link>
    </main>
  );
}

import Link from "next/link";
import styles from "./page.module.css";
import ComponentsLibrary from "@/libs/index";

export default () => {

  return (
    <main className={styles.main} >
      <ComponentsLibrary.AppBar />
      <Link href={"/vistaContent"} style={{ marginTop: "32px" }}>Vista Content</Link>
    </main>
  );
}

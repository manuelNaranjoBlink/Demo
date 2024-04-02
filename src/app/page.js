import Link from "next/link";
import styles from "./page.module.css";
import ComponentsLibrary from "@/libs";

export default () => {

  let actualLibrary = ComponentsLibrary.getInstance();
  const {AppBar}=actualLibrary

  return (
    <main className={styles.main} >
      <AppBar />
      <Link href={"/vistaContent"} style={{ marginTop: "32px" }}>Vista Content</Link>
    </main>
  );
}

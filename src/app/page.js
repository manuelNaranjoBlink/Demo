import styles from "./page.module.css";
import ActualComponentsLibrary from "@/libs/index";

export default () => {

  const ComponentsLibrary = ActualComponentsLibrary.getInstance();

  return (
    <main className={styles.main} >
      <ComponentsLibrary.AppBar />
    </main>
  );
}

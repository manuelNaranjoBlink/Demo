import { LibraryProvider } from "@/contexts/LibrariesProvider";
import Components from '@/libs/libA/';
import styles from "@/themes/themeA"
import './blink.css';

export default () => {

  const { AppBar, ViewContent } = Components

  return (
    <LibraryProvider logicApp={'useDefault'} styles={styles}>
      <div className={styles.home.main}>
        <AppBar />
        <ViewContent />
      </div>
    </LibraryProvider>
  )
}
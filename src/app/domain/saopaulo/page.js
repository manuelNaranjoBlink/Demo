import { LibraryProvider } from "@/contexts/LibrariesProvider";
import Components from '@/libs/libB/';
import styles from "@/themes/themeB"
import './saopaulo.css';

export default () => {

  const { AppBar, ViewContent } = Components

  return (
    <LibraryProvider logicApp={'useModified'} styles={styles}>
      <div className={styles.home.main}>
        <AppBar />
        <ViewContent />
      </div>
    </LibraryProvider>
  )
}
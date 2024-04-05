import Link from 'next/link';
import { CLDIR, THEMEDIR } from "../domain.config";

export default async () => {

  let actualLibrary = (await import("@/libs/" + CLDIR)).default;
  let styles = (await import("@/themes/" + THEMEDIR)).default;
  const { ViewContent } = actualLibrary

  return (
    <div className={styles.viewContent.container}>
      <Link href="/">Home</Link>
      <ViewContent />
    </div>
  );
}

import { Suspense } from 'react';
import { ThemeLibrary } from '../domain.config';
import ViewBooksSection from '../components/ViewBooks'
import ViewBooksSectionSkeleton from '../components/ViewBooks/components/Skeleton';

export default async function MainPage() {

  const styles = ThemeLibrary()

  return (
    <div className={styles.viewContent.container}>
      <h2 className={styles.viewContent.title} >View Resources</h2>
      <Suspense fallback={<ViewBooksSectionSkeleton />}>
        <ViewBooksSection />
      </Suspense>
    </div>
  )
}
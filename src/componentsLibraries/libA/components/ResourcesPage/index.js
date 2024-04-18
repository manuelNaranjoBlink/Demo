import { Suspense } from 'react';
import ViewResourcesSectionSkeleton from './components/Skeleton';
import ViewResourcesSection from './components/ViewResources';

export default async function MainPage() {

  return (
    <div className='page-container'>
      <h2 className='section-title' >View Resources</h2>
      <Suspense fallback={<ViewResourcesSectionSkeleton />}>
        <ViewResourcesSection />
      </Suspense>
    </div>
  )
}

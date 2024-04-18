import { Suspense } from 'react';
import ViewGroupsSection from './components/Groups';
import ViewGroupsSectionSkeleton from './components/Skeleton';

export default function GroupsPage() {

    return (
        <div className={'page-container'}>
            <h2 className={'section-title'} >View Groups</h2>
            <Suspense fallback={<ViewGroupsSectionSkeleton />}>
                <ViewGroupsSection />
            </Suspense>
        </div>
    )
}
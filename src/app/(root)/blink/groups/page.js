import { Suspense } from 'react';
import ViewGroupsSection from '../components/Groups';
import { ThemeLibrary } from '../domain.config';
import ViewGroupsSectionSkeleton from '../components/Groups/components/Skeleton';

export default () => {

    const styles = ThemeLibrary()

    return (
        <div className={styles.viewContent.container}>
            <h2 className={styles.viewContent.title} >View Groups</h2>
            <Suspense fallback={<ViewGroupsSectionSkeleton />}>
                <ViewGroupsSection />
            </Suspense>
        </div>
    )
}
import { Suspense } from 'react';
import ViewGroupsSection from '../components/Groups';
import { ThemeLibrary } from '../domain.config';

export default () => {

    const styles = ThemeLibrary()

    return (
        // <div className={styles.test.container}>
            <Suspense fallback={<div>Loading...</div>}>
                <ViewGroupsSection />
            </Suspense>
        // </div>
    )
}
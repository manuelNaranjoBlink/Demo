import React, { Suspense } from "react";
import ViewResourcesSection from "./components/ViewResourcesSection";
import ViewResourcesSectionSkeleton from "./components/Skeleton";

export default async function ResourcesPage() {

    return (
        <Suspense fallback={<ViewResourcesSectionSkeleton />}>
            <ViewResourcesSection />
        </Suspense>
    )
}
export default function ViewResourcesSectionSkeleton() {

    return (
        <div className="resource-container-skeleton" style={{  }}>
            <ResourceItemSkeleton />
            <ResourceItemSkeleton />
            <ResourceItemSkeleton />
            <ResourceItemSkeleton />
        </div >
    )
}

const ResourceItemSkeleton = () => {
    return (
        <div className="resource-skeleton">
            <div className="skeletonBox image-skeleton"></div>
            <div className="skeletonBox container-skeleton">
                <div className="title-skeleton"></div>
                <div className="author-skeleton"></div>
            </div>
        </div>
    )
}
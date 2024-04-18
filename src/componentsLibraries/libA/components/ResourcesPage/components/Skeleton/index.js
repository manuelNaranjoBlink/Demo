
export default function ViewResourcesSectionSkeleton() {

    return (
        <div className="resource-container-skeleton">
            <ul className="resource-list-skeleton">
                <ResourcesItemSkeleton />
                <ResourcesItemSkeleton />
                <ResourcesItemSkeleton />
                <ResourcesItemSkeleton />
                <ResourcesItemSkeleton />
                <ResourcesItemSkeleton />
            </ul>
        </div >
    )
}

const ResourcesItemSkeleton = () => {
    return <li className="resource-skeleton">
        <div className="skeletonBox image-skeleton"></div>
        <div className='skeletonBox title-skeleton'></div>
        <div className='skeletonBox author-skeleton'></div>
    </li>
}
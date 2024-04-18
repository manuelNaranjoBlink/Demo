
export default function ViewGroupsSectionSkeleton() {

    return (
        <div className="resource-container-skeleton">
            <GroupItemSkeleton />
            <GroupItemSkeleton />
            <GroupItemSkeleton />
            <GroupItemSkeleton />
            <GroupItemSkeleton />
            <GroupItemSkeleton />
        </div >
    )
}

const GroupItemSkeleton = () => {
    return <div className="skeletonBox resource-skeleton" >
        <div className="skeletonBox image-skeleton"></div>
        <div className="container-skeleton">
            <div className="section-skeleton" >
                <div className="title-skeleton"></div>
                <div className="icon-skeleton" ></div>
            </div>
            <div className="section-skeleton" >
                <div className="code-section-skeleton">
                    <div className="code-skeleton"></div>
                    <div className="copy-skeleton"></div>
                </div>
                <div className="icon-skeleton" ></div>
            </div>
        </div>
    </div>
}
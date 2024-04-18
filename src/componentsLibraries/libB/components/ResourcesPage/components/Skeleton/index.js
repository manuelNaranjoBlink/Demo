export default function ViewResourcesSectionSkeleton() {

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 64px', width: '100%', padding: '32px 20px' }}>
            <ResourceItemSkeleton />
            <ResourceItemSkeleton />
            <ResourceItemSkeleton />
            <ResourceItemSkeleton />
        </div >
    )
}

const ResourceItemSkeleton = () => {
    return <div style={{ height: '183px', width: '407px', display: 'flex', backgroundColor: 'white' }}>
        <div className="skeletonBox" style={{ minWidth: '120px', backgroundColor: '#d2d6d7' }}></div>
        <div style={{ padding: '16px', placeContent: 'center', display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ width: '250px', height: '23px', backgroundColor: '#d2d6d7' }}></div>
            <div style={{ width: '125px', height: '19px', backgroundColor: '#d2d6d7', marginTop: '8px' }}></div>
        </div>
    </div>
}
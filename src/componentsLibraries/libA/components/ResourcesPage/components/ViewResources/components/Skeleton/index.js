
export default function ViewResourcesSectionSkeleton() {

    return (
        <div style={{ padding: '0 8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ listStyle: 'none', width: '100%', display: 'flex', placeContent: 'baseline', flexWrap: 'wrap', gap: '16px 32px' }}>
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
    return <li style={{
        width: '210px', height: '375px', padding: '10px', display: 'flex', flexDirection: 'column'
    }}>
        <div className='skeletonBox' style={{ height: '270px', width: '190px', background: '#d2d6d7' }}>
            <div>
            </div>
        </div>
        <div className='skeletonBox' style={{ height: '23px', width: '190px', background: '#d2d6d7', marginTop: '20px' }}></div>
        <div className='skeletonBox' style={{ height: '18px', width: '190px', background: '#d2d6d7', marginTop: '5px' }}></div>
    </li>
}
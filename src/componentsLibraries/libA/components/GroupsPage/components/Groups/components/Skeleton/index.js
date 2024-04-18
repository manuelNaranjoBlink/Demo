
export default function ViewGroupsSectionSkeleton() {

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px 16px', width: '100%', padding: '32px', }}>
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
    return <div style={{ height: '192px', display: 'flex', backgroundColor: 'white' }}>
        <div className="skeletonBox" style={{ minWidth: '160px', backgroundColor: '#d2d6d7' }}></div>
        <div style={{ padding: '1.5em 2.5em 1.5em 1.8em', display: 'flex', flexDirection: 'column', placeContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', placeContent: 'space-between', width: '100%' }}>
                <div style={{ width: '250px', height: '23px', backgroundColor: '#d2d6d7' }}></div>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#d2d6d7' }}></div>
            </div>
            <div style={{ display: 'flex', placeContent: 'space-between', width: '100%' }}>
                <div style={{ display: 'flex', height: '20px' }}>
                    <div style={{ width: '100px', backgroundColor: '#d2d6d7', marginRight: '5px' }}></div>
                    <div style={{ width: '17px', backgroundColor: '#d2d6d7' }}></div>
                </div>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#d2d6d7' }}></div>
            </div>
        </div>
    </div>
}
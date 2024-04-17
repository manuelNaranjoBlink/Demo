import { ComponentsLibrary } from '../../domain.config';

const RESPONSE = {
    "data": {
        "1": {
            "name": "oxford_elt_test_generator (viejo)",
            "thumb": "/coursePlayer/getimage.php?idcurso=7&t=1709718426",
            "author": {
                "contributor": "Admin Plataforma"
            },
        },
        "3": {
            "name": "Geniox 2022 DEMO",
            "thumb": "/useruploads/icons/144/190/r/c/15/librochico_429974.png",
            "author": {
                "contributor": "Editorial Oxford Demo"
            },
        },
        "2": {
            "name": "oxford_elt_2022 con test generator",
            "thumb": "/coursePlayer/getimage.php?idcurso=6&t=1712748406",
            "author": {
                "contributor": "Admin Plataforma"
            },
        },
        "4": {
            "name": "Contenido ejercicio",
            "thumb": "/coursePlayer/getimage.php?idcurso=8&t=1710157749",
            "author": {
                "contributor": "Manuel Naranjo"
            },
        },
        "7": {
            "name": "Competencias",
            "thumb": "/coursePlayer/getimage.php?idcurso=10&t=1712908043",
            "author": {
                "contributor": "Manuel Naranjo"
            },
        },
        "6": {
            "name": "Geniox 2022 DEMO",
            "thumb": "/useruploads/icons/144/190/r/c/15/librochico_429974.png",
            "author": {
                "contributor": "Editorial Oxford Demo"
            },
        },
        "5": {
            "name": "Oxford Zona Recursos",
            "thumb": "/useruploads/icons/144/190/r/c/16/zonarecursos_617582.png",
            "author": {
                "contributor": "Editorial Oxford Demo"
            },
        }
    }
}

export async function ViewBooksSectionSkeleton() {

    return (
        <div style={{ padding: '0 8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul style={{ listStyle: 'none', width: '100%', display: 'flex', placeContent: 'baseline', flexWrap: 'wrap', gap: '16px 32px' }}>
                <li style={{
                    width: '210px', height: '375px', padding: '10px', display: 'flex', flexDirection: 'column'
                }}>
                    <div className='skeletonBox' style={{ height: '270px', width: '190px', background: '#d2d6d7' }}>
                        <div>
                        </div>
                    </div>
                    <div className='skeletonBox' style={{ height: '23px', width: '190px', background: '#d2d6d7', marginTop: '20px' }}></div>
                    <div className='skeletonBox' style={{ height: '18px', width: '190px', background: '#d2d6d7', marginTop: '5px' }}></div>
                </li>
                <li style={{
                    width: '210px', height: '375px', padding: '10px', display: 'flex', flexDirection: 'column'
                }}>
                    <div className='skeletonBox' style={{ height: '270px', width: '190px', background: '#d2d6d7' }}>
                        <div>
                        </div>
                    </div>
                    <div className='skeletonBox' style={{ height: '23px', width: '190px', background: '#d2d6d7', marginTop: '20px' }}></div>
                    <div className='skeletonBox' style={{ height: '18px', width: '190px', background: '#d2d6d7', marginTop: '5px' }}></div>
                </li>
                <li style={{
                    width: '210px', height: '375px', padding: '10px', display: 'flex', flexDirection: 'column'
                }}>
                    <div className='skeletonBox' style={{ height: '270px', width: '190px', background: '#d2d6d7' }}>
                        <div>
                        </div>
                    </div>
                    <div className='skeletonBox' style={{ height: '23px', width: '190px', background: '#d2d6d7', marginTop: '20px' }}></div>
                    <div className='skeletonBox' style={{ height: '18px', width: '190px', background: '#d2d6d7', marginTop: '5px' }}></div>
                </li>
                <li style={{
                    width: '210px', height: '375px', padding: '10px', display: 'flex', flexDirection: 'column'
                }}>
                    <div className='skeletonBox' style={{ height: '270px', width: '190px', background: '#d2d6d7' }}>
                        <div>
                        </div>
                    </div>
                    <div className='skeletonBox' style={{ height: '23px', width: '190px', background: '#d2d6d7', marginTop: '20px' }}></div>
                    <div className='skeletonBox' style={{ height: '18px', width: '190px', background: '#d2d6d7', marginTop: '5px' }}></div>
                </li>
                <li style={{
                    width: '210px', height: '375px', padding: '10px', display: 'flex', flexDirection: 'column'
                }}>
                    <div className='skeletonBox' style={{ height: '270px', width: '190px', background: '#d2d6d7' }}>
                        <div>
                        </div>
                    </div>
                    <div className='skeletonBox' style={{ height: '23px', width: '190px', background: '#d2d6d7', marginTop: '20px' }}></div>
                    <div className='skeletonBox' style={{ height: '18px', width: '190px', background: '#d2d6d7', marginTop: '5px' }}></div>
                </li>
                <li style={{
                    width: '210px', height: '375px', padding: '10px', display: 'flex', flexDirection: 'column'
                }}>
                    <div className='skeletonBox' style={{ height: '270px', width: '190px', background: '#d2d6d7' }}>
                        <div>
                        </div>
                    </div>
                    <div className='skeletonBox' style={{ height: '23px', width: '190px', background: '#d2d6d7', marginTop: '20px' }}></div>
                    <div className='skeletonBox' style={{ height: '18px', width: '190px', background: '#d2d6d7', marginTop: '5px' }}></div>
                </li>
            </ul>
        </div >
    )
}

export default async function ViewBooksSection() {

    const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000))
        return RESPONSE
    }

    const response = await fetchData()

    const { ViewBooks } = ComponentsLibrary()

    return (<ViewBooks books={response.data} />)
}
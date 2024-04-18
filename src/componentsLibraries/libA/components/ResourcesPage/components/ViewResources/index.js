import ViewResources from "../ResourceItem"

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

export default async function ViewResourcesSection() {

    const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000))
        return RESPONSE
    }

    const response = await fetchData()

    return (
        <ViewResources Resources={response.data} />
    )
}
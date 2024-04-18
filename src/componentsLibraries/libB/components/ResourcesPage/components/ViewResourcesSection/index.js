import React from "react";
import ViewResources from '../ViewResources'

const RESPONSE = {
    "data": {
        "1": {
            "name": "Economía y emprendimiento 4. ESO.",
            "thumb": "1.png",
            "author": {
                "contributor": "Anaya"
            },
        },
        "2": {
            "name": "Actividades Blink UX",
            "thumb": "2.png",
            "author": {
                "contributor": "Contenido Digital"
            },
        },
        "3": {
            "name": "CLIL World Natural Sciences 5. Digital Class Book",
            "thumb": "3.png",
            "author": {
                "contributor": "Oxford University Press"
            },
        },
        "4": {
            "name": "Physics & Chemistry 2º ESO. Desktop GENiOX",
            "thumb": "4.png",
            "author": {
                "contributor": "Oxford University Press"
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
    console.log("HERE response.data", response.data)

    return (
        <ViewResources resources={response.data} />
    )
}
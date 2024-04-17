import { ComponentsLibrary } from "../../domain.config"

const RESPONSE = {
    "apiVersion": "1.0",
    "method": "Group.myGroups",
    "context": "/api/v/1/my/groups",
    "params": null,
    "updated": 1713335746,
    "data": {
        "(DEMO)2": {
            "name": "(DEMO)",
            "code": "",
            "thumb": '1.png',
            "color": false,
            "rules": {
                "canEdit": false,
                "canLock": false,
            }
        },
        "(DEMO)": {
            "name": "(DEMO)",
            "code": "",
            "thumb": '1.png',
            "color": false,
            "rules": {
                "canEdit": false,
                "canLock": false,
            }
        },
        "A editado": {
            "name": "A editado",
            "code": "CL38444217",
            "thumb": '2.png',
            "color": 'rgb(253, 131, 1)',
            "rules": {
                "canEdit": true,
                "canLock": true,
            }
        },
        "A Alemán": {
            "name": "A Alemán ",
            "code": "CL84742514",
            "thumb": '3.png',
            "color": 'rgb(22, 228, 162)',
            "rules": {
                "canEdit": true,
                "canLock": true,
            }
        },
        "Educación infantil (0-3 años) A Alemán ": {
            "name": "Educación infantil (0-3 años) A Alemán ",
            "code": "CL82431229",
            "thumb": "4.png",
            "color": "#00A9EB",
            "rules": {
                "canEdit": true,
                "canLock": true,
            }
        },
        "Administración y gestión": {
            "name": " Administración y gestión ",
            "code": "CL27236257",
            "thumb": "5.png",
            "color": 'rgb(204, 204, 204)',
            "rules": {
                "canEdit": true,
                "canLock": true,
            }
        }
    }
}

export default async function ViewGroupsSection() {

    const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        return RESPONSE
    }

    const response = await fetchData()

    const { ViewGroups } = ComponentsLibrary()

    return (
        <ViewGroups groups={response.data} />
    )
}
import ResourceItem from "../ResourceItem";

export default function ViewResources({ resources }) {

    return (
        <div className={'page-container'}>
            {Object.values(resources).map(resource => <ResourceItem key={resource.name} resource={resource} />)}
        </div>
    )
}
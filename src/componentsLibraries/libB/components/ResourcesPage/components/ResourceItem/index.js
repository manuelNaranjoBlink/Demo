import Image from "next/image";

export default function ResourceItem({ resource }) {

    return (
        <div className={'resource'}>
            <div>
                <Image src={'/resources/img/' + resource.thumb} alt="resource image" width={120} height={181} />
            </div>
            <div className='info-container'>
                <h3 className="title">{resource.name}</h3>
                <p className="author">{resource.author.contributor}</p>
            </div>
        </div>
    )
}
import '../CSS/Collection.css';
import { collectiondata } from '../Data/CollectionsData';
import PopularLocation from './PopularLocation';
export default function Collection() {
    return (
        <>
        <section className='Collections'>
    <div className="container">
        <div className="row">
            <div className="Collectionscard_name">
                <h1>Collections</h1>
                <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
            </div>
            {collectiondata.map((data) => (
                <div className="col-lg-3 col-md-6 col-12 mb-4" key={data.id}>
                    <div className="Collectionscard">
                        <div className="Collectionscard_img text-center">
                            <img className='img-fluid' src={data.imgSrc} alt={data.alt || 'Collection image'} />
                        </div>
                        <p className='coll_des pt-2 pb-2'>{data.des}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>


           
           
            <PopularLocation />
        </>
    )
}
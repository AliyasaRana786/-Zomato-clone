/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../CSS/ProductPage.css'


export default function ProductPage({ items }) {

    return (
        <>
<section className="ProductPage">
    <div className="container">
        <div className="row">
            {items.map((data) => {
                return (
                    <div className="col-lg-3 col-md-6 col-12" key={data.id}>
                        <div className="productPagecard">
                            <Link to={`/ProductdetailsPage/${data.id}`} className="productPagecard_img">
                                <img className='img-fluid' src={data.imgSrc} alt={data.description} />
                            </Link>
                            <div className="productpage_name mt-3">
                                <p className='productname'>{data.brandname}</p>
                                <p className='productrating'>{data.rating}<span><i className="fa-solid fa-star"></i></span></p>
                            </div>
                            <div className="product_des mt-2 mb-2">
                                <p className='desc'>{data.description}</p>
                                <p className='price'>₹{data.price}</p>
                            </div>
                            <div className="location_km mb-2">
                                <p className='location'>{data.location}</p>
                                <p className='km'>{data.KM}KM</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
</section>


         
        </>

    )
}
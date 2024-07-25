import { useParams } from 'react-router-dom'
import '../CSS/ProductdetailsPage.css'
import { useEffect, useState } from 'react';
import { items } from '../Data/ProductPageData';

export default function ProductdetailsPage() {
    const [product, setProduct] = useState({})
    const { id } = useParams();


    useEffect(() => {
        const element = items.filter((proid) => proid.id == id);

        setProduct(element[0]);
    }, [id]);

    return (
        <section className="ProductdetailsPage">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="productdetails_img">
                            <img className='img-fluid' src={product.imgSrc} alt="" />
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="productdetails_img img1">
                            <img className='img-fluid' src={product.imgSrc} alt="" />
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="productdetails_img img1">
                            <img className='img-fluid' src={product.imgSrc} alt="" />
                        </div>

                    </div>
                    <div className="productdetailspage_details">
                        <div className="product_name">{product.brandname}</div>
                        <div className="product_description mb-1">{product.description}</div>
                        <div className="product_location mb-1">{product.location}</div>
                        <div className="pricerating">
                            <p className='product_price'>₹{product.price}</p>
                            <p className='product_rating mx-5'>{product.rating} <span><i className="fa-solid fa-star"></i></span></p>
                            <p className='KM'>{product.KM}KM</p>
                        </div>
                        <div className="productdetails_btn mt-3 mb-3">
                            <button><span><i className="fa-solid faicon fa-diamond-turn-right"></i></span > Direction</button>
                            <button className='mx-2'><span><i className="fa-regular faicon fa-bookmark"></i></span> Bookmark</button>
                            <button className='mx-2'><span><i className="fa-solid faicon fa-share"></i></span> Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
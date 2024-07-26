/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate, } from 'react-router-dom'
import '../CSS/Navbar.css'
import { items } from '../Data/ProductPageData';
import { useState } from 'react';
export default function Navbar({ setData }) {
    const [searchproduct, setSearchproduct] = useState([]);

    const location = useLocation();
    const nagivate = useNavigate();

    const handleclick = (foodtypes) => {
        const element = items.filter((product) => product.foodTypes === foodtypes);

        setData(element);
    }

    const handleclicks = (types) => {
        const elements = items.filter((product) => product.types === types);
        setData(elements)

    }

    const handleclickss = (type) => {
        const elementss = items.filter((prod) => prod.tpyes === type);
        setData(elementss)
        console.log(elementss);
    }

    const handlerating = (rating) => {
        const productrating = items.filter((prorat) => prorat.rating >= rating);
        setData(productrating);
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        nagivate(`/searchitempage/${searchproduct}`)

        setSearchproduct('')
    }

    return (

        <>
            <section className='nabvars'>
                <div className="container">
                    <div className="navbar">
                        <div className="navbar_logo">
                            <Link to={'/'}>
                                <h1>ZOMOTO</h1>
                            </Link>

                        </div>
                        <div className="navbar_searchbar">
                            <form onSubmit={handlesubmit}>
                                <input onChange={(e) => setSearchproduct(e.target.value)} value={searchproduct} type="text" placeholder='Search for restaurant,cuisine or a dish.... ' />
                            </form>

                        </div>
                        <div className="navbar_btn">
                            <button className='mx-2'>Log In</button>
                            <button className='mx-2'>Sign up</button>
                        </div>
                    </div>

                </div>

            </section>

            {location.pathname == '/productpage' && (
                <section className='productfilter'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-md-4 col-4">
                                <p className='profilter mb-2' onClick={() => setData(items)}>Filter</p>
                            </div>
                            <div className="col-lg-1 col-md-4 col-4">
                                <p className='profilter mb-2' onClick={() => handleclick('pure-veg')}>Pure-Veg</p>
                            </div>
                            <div className="col-lg-1 col-md-4 col-4">
                                <p className='profilter mb-2' onClick={() => handleclick('non-veg')}>Non-Veg</p>
                            </div>
                            <div className="col-lg-1 col-md-4 col-4">
                                <p className='profilter mb-2' onClick={() => handlerating(4.0)}>R :4.0+</p>
                            </div>
                            <div className="col-lg-1 col-md-4 col-4">
                                <p className='profilter mb-2' onClick={() => handleclicks('club')}>Club</p>
                            </div>
                            <div className="col-lg-1 col-md-4 col-4">
                                <p className='profilter mb-2' onClick={() => handleclickss('restaurants')}>hotels</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}


        </>



    )
}
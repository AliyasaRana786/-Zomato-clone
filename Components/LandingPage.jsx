import { Link } from 'react-router-dom'
import '../CSS/LandingPage.css'
import { categorydata } from '../Data/CategoryData'
import Collection from './Collection'
export default function LandingPage() {
    return (

        <>
        <section className='LandingPage'>
    <div className="container">
        <div className="row">
            {categorydata.map((data) => {
                return (
                    <div className="col-lg-4 col-md-6 col-12" key={data.id}>
                        <div className="categorycard">
                            <Link to={'/productpage'} className="categorycard_img">
                                <img className='img-fluid' src={data.imgSrc} alt={data.name} />
                            </Link>
                            <div className="categorycard_det">
                                <div className="categorycard_name">{data.name}</div>
                                <div className="category_des">{data.description}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
</section>

 


            <Collection />
        </>
    )
}
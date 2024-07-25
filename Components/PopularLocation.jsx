import '../CSS/PopularLocation.css'
import { popularlocationdata } from '../Data/PopularLocationData'
import ZomotoApp from './ZomotoApp'
export default function PopularLocation() {
    return (
        <>

<section className='PopularLocation'>
    <div className="container">
        <div className="poploc">
            <h2>Popular localities in and around Delhi NCR</h2>
        </div>

        <div className="row">
            {popularlocationdata.map((data, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12">
                    <div className="PopularLocation_card">
                        <p>{data.location_name}</p>
                        <span>{data.location_count}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

           
            <ZomotoApp />
        </>
    )
}
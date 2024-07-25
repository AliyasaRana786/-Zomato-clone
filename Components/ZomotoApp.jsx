import '../CSS/ZomotoApp.css';
import ExploreOption from './ExploreOption';
export default function ZomotoApp() {
    return (
        <>
            <section className='ZomotoApp'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="mobile_phone_img ">
                                <img className='img-fluid' src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="zomoto_form">
                                <h2 className='mb-3'>Get the Zomato app</h2>
                                <p className='mb-3'>We will send you a link, open it on your phone to download the app</p>
                                <form>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Email</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Phone</label>
                                    </div>
                                    <div className="inputbar mt-3">
                                        <input type="text" placeholder='Email' />
                                        <button className='mx-2'>Share App Link</button>
                                    </div>
                                    <div className="logo_btn_bar mt-3 mb-2">
                                        <p className='mb-3'>Download app from</p>
                                        <img className='img-fluid' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                                        <img className='img-fluid mx-3' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <ExploreOption />
        </>
    )
}
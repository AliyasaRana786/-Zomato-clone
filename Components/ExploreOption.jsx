import '../CSS/ExploreOption.css'
export default function ExploreOption() {
    return (
        <>
            <section className='ExploreOption'>
                <div className="container">
                    <div className="explore mb-4">
                        <h2>Explore options near me</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">

                            <div className="accordion" id="accordionExample">

                                <div className="accordion-item mb-4">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Popular cuisines near me
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Bakery food near meBeverages food near meBiryani food near meBurger food near meChinese food near meCoffee food near meContinental food near meDesserts food near meItalian food near meMithai food near meMomos food near meMughlai food near meNorth Indian food near mePasta food near mePizza food near meRolls food near meSandwich food near meShake food near meSouth Indian food near meStreet food near me
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item  mb-4">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Popular restaurant types near me
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Bakeries near meBars near meBeverage Shops near meBhojanalya near meCafés near meCasual Dining near meClubs near meCocktail Bars near meConfectioneries near meDessert Parlors near meDhabas near meFine Dining near meFood Courts near meFood Trucks near meIrani Cafes near meKiosks near meLounges near meMeat Shops near meMicrobreweries near mePaan Shop near mePubs near meQuick Bites near meSweet Shops near me
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item  mb-4">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Top Restaurant Chains
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item  mb-4">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Cities We Deliver To
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
import React from "react";

function ContHero(){
    return(
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center pb-4">
                        <h2 className="fnt-clr-head">We are the IT experts!</h2>
                        <p className="lead fnt-clr-text">
                            OpenITLabz is a leading software training institute in Pune. We offer an immersive learning experience to students and working professionals a like.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                            <div className="p-3 leadership-quality_align">
                                <div className="icon-green icon-shape icon-md text-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined" >
                                        <img src="./assets/school.svg" alt="hc"/>
                                    </span>
                                </div>
                                <h5 className="mt-4 fnt-clr-head">Upskill Yourself</h5>
                                <p className="fnt-clr-txt">Our programs are designed to bridge the gap between academia and industry.</p>
                            </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                            <div className="p-3 leadership-quality_align">
                                <div className="icon icon-shape icon-md text-center mb-4 mx-auto" style={{backgroundImage:'linear-gradient(195deg, #49a3f1 0%, #1A73E8 100%)'}}>
                                    <span className="material-symbols-outlined">
                                        <img src="./assets/help.svg" alt="hc"/>
                                    </span>
                                </div>
                                <h5 className="mt-4 fnt-clr-head">OpenITLabz Support</h5>
                                <p className="fnt-clr-txt">Our staff goes above and beyond to help students with any difficulties.</p>
                            </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                            <div className="p-3 leadership-quality_align">
                                <div className="icon icon-shape icon-md text-center mb-4 mx-auto" style={{backgroundImage:'linear-gradient(195deg, #FFA726 0%, #FB8C00 100%)'}}>
                                    <span className="material-symbols-outlined">
                                        <img src="./assets/manage_accounts.svg" alt="hc"/>
                                    </span>
                                </div>
                                <h5 className="mt-4 fnt-clr-head">Instructor @ OpenITLabz</h5>
                                <p className="fnt-clr-txt">Think you’ll be a good fit for our team? Don’t hesitate to reach out!</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContHero;
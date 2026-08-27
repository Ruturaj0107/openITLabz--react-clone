import React from "react";

function Quality() {
    return (
        <>
            <section className="py-4">
                <div className="container px-4">
                    <div className="row" style={{ display:"-webkit-inline-box" }}>
                        <div className="col-lg-6 col-md-12 order-2 order-md-1 order-lg-1 p-0">
                            <div className="p-3 pt-0">
                                <h2 className="mb-4 fnt-clr-head">Quality education @ OpenITLabz</h2>
                                <p className="text-justify fnt-clr-txt">
                                    Quality IT education and training are the need of the hour. Individuals cannot simply know the concepts but must be capable of applying them in a dynamic work environment.
                                </p>
                                <p className="text-justify fnt-clr-txt">
                                    Online education has brought the entire world of knowledge to our fingertips. We must be proactive and make the most of it. Start the next phase of your career at the best software training institute in Pune!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-6 mx-lg-0 mx-auto px-lg-0 d-none d-sm-none d-md-block px-md-0 my-auto">
                            <div>
                                <img className="w-100 border-radius-xl" src="./assets/qeimg1.jpg" alt="carz"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container py-5 content-course-details">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="p-3 leadership-quality_align">
                                <div className="icon-shape icon-red text-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined">
                                        <img src="./assets/inbox.svg" alt="hc"/>
                                    </span>
                                </div>
                                <h5 className="mt-4 fnt-clr-head">Course Advice</h5>
                                <p className="fnt-clr-txt">Together let's figure out the right option for you</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="p-3 leadership-quality_align">
                                <div className="icon-shape icon-red text-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined">
                                        <img src="./assets/person_search.svg" alt="hc"/>
                                    </span>
                                </div>
                                <h5 className="mt-4 fnt-clr-head">Get Ahead</h5>
                                <p className="fnt-clr-txt">In a classic all exhibitors will be able to pitch</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="p-3 leadership-quality_align">
                                <div className="icon-shape icon-red text-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined">
                                        <img src="./assets/stream.svg" alt="hc"/>
                                    </span>
                                </div>
                                <h5 className="mt-4 fnt-clr-head">Technical Expertise</h5>
                                <p className="fnt-clr-txt">Specialized knowledge for real-world situations</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="p-3 leadership-quality_align">
                                <div className="icon-shape icon-red text-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined">
                                        <img src="./assets/vrpano.svg" alt="hc"/>
                                    </span>
                                </div>
                                <h5 className="mt-4 fnt-clr-head">Team Training</h5>
                                <p className="fnt-clr-txt">Quality education & support for all employees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Quality;
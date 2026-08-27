import React from "react";
import { Link } from "react-router-dom";

function OurStud() {
    return(
        <>
        <section>
            <div className="my-5 py-5" id="home-work-at">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto text-center">
                            <h2 className="fnt-clr-head pt-5">Our students works at</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-4 col-6 mb-4 d-flex justify-content-center">
                            <img className="w-75" alt="com" src="./assets/logo1.png"></img>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4 d-flex justify-content-center">
                            <img className="w-75" alt="com" src="./assets/logo2.png"></img>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4 d-flex justify-content-center">
                            <img className="w-75" alt="com" src="./assets/logo7.png"></img>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4 d-flex justify-content-center">
                            <img className="w-75" alt="com" src="./assets/logo6.png"></img>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4 d-flex justify-content-center">
                            <img className="w-75" alt="com" src="./assets/logo4.png"></img>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4 d-flex justify-content-center">
                            <img className="w-75" alt="com" src="./assets/logo50.svg"></img>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4 d-flex justify-content-center">
                            <img className="w-75" alt="com" src="./assets/logo30.svg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-4">
            <div className="container px-4">
                <div className="row" style={{display:"-webkit-inline-box"}}>
                    <div className="col-md-5 col-lg-6 mx-lg-0 mx-auto px-lg-0 d-none d-sm-none d-md-block px-md-0 my-auto">
                        <div>
                            <img className="w-100 border-radius-xl" src="./assets/corporate-training.jpg" alt="carz"></img>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-2 order-md-1 order-lg-1 p-0">
                        <div className="p-3 pt-0">
                            <h2 className="mb-4 fnt-clr-head">Corporate training and benefits</h2>
                            <p className="text-justify fnt-clr-txt">
                                You need employees that perform at their utmost levels and are in sync with the ever-changing world of technology. Employees want access to training and development resources to advance their careers. 
                                <br/>
                                <br/>
                                This is where we step in! We design high-quality learning programs in line with the requirements of your organization. These not only serve the personal goals of your team but also boost overall company profits in the long term.
                            </p>
                            <p className="text-justify fnt-clr-txt">
                                In this highly-competitive environment, retaining talented employees is becoming a challenge for most companies. The right opportunities through corporate training will encourage more people to stay.   
                                <br/>
                            </p>
                            <Link to="/corporate-training"><button className='btn btn-lg bg-gradient-success rm md-0'>READ MORE</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="pb-5 corp-trainning-feature-home">
            <div className="container px-4">
                <div className="row mt-5">
                    <div className="col-sm-6 col-lg-4 mt-lg-0 ">
                        <img className="w-10 mb-3" alt="com" src="./assets/cost1.svg"></img>
                        <h5 className="fnt-clr-head">Better Cost Efficiency</h5>
                        <p className="text-sm fnt-clr-txt">Upgrading the skills of current employees is easier and more feasible than constantly recruiting new people.</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 mt-lg-0 ">
                        <img className="w-10 mb-3" alt="com" src="./assets/skill.svg"></img>
                        <h5 className="fnt-clr-head">Soft Skills Development</h5>
                        <p className="text-sm fnt-clr-txt">While most new joinees are well-versed with technologies, corporate training can enhance their soft skills.</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 mt-lg-0 ">
                        <img className="w-10 mb-3" alt="com" src="./assets/recruitment.svg"></img>
                        <h5 className="fnt-clr-head">Guidance for New Hires</h5>
                        <p className="text-sm fnt-clr-txt">Several freshers need training in the beginning to transition from a classroom to the workplace.</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 mt-lg-0 pt-5">
                        <img className="w-10 mb-3" alt="com" src="./assets/employee.svg"></img>
                        <h5 className="fnt-clr-head">Upgrade & Update Employees</h5>
                        <p className="text-sm fnt-clr-txt">Through our organized method of instruction, flexible modules, and industry-relevant hands-on projects.</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 mt-lg-0 pt-5">
                        <img className="w-10 mb-3" alt="com" src="./assets/leadership.svg"></img>
                        <h5 className="fnt-clr-head">Enhanced Leadership Potential</h5>
                        <p className="text-sm fnt-clr-txt">Discover talent and prospective leaders within the organization via our corporate training sessions.</p>
                    </div>
                    <div className="col-sm-6 col-lg-4 mt-lg-0 pt-5">
                        <img className="w-10 mb-3" alt="com" src="./assets/productivity.svg"></img>
                        <h5 className="fnt-clr-head">Better Employee Morale</h5>
                        <p className="text-sm fnt-clr-txt">At the end of the day, corporate training will ensure employee satisfaction, thereby boosting productivity.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}


export default OurStud;


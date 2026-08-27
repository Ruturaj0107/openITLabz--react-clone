import React from "react";

function ScheduleDemo(){
    return(
        <page className="bg-light">
        <header className="">
            <div className="page-header min-vh-75 bg-demo-banner" style={{backgroundImage:'url(./assets/demo-banner.jpg)'}}>
                <span className="mask bg-common-banner-overlay opacity-4"></span>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 my-auto">
                            <div className="brand">
                                <h2 className="text-white mb-0">
                                    Schedule Your Demo
                                </h2>
                                <p className="text-white opacity-8 fw-bold"></p>
                            </div>
                        </div>
                        <div className="col-lg-5 my-auto">
                            {/* <img></img> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="bg_div card card-body shadow-blur mx-3 mx-md-4 mt-n6" style={{transform:"translateY(-70px)",border:'none'}}>
            <section className="my-lg-5 my-5 text-center">
                <div className="page-header">
                    <div className="container py-5 content-course-details">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-7">
                                <div className="card card-body inner d-felx justify-content-center p-2 align-items-center schedule-demo-card" style={{boxShadow:"0 7px 30px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",border:'none'}}>
                                    <h2 className="text-center schedule-demo-title">Schedule a demo</h2>
                                    <form id="feedback_form" className="w-100 schedule-demo-form" method="post">
                                        <div className="card-body">
                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <div className="schedule-demo-field">
                                                        <label htmlFor="name">Name</label>
                                                        <input type="text" className="schedule-demo-input" required id="name" name="name" placeholder="Your name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="schedule-demo-field">
                                                        <label htmlFor="mobile_no">Contact number</label>
                                                        <input type="tel" className="schedule-demo-input" required maxLength="10" id="mobile_no" name="mobile_no" placeholder="Your contact" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="schedule-demo-field">
                                                        <label htmlFor="email">Email Address</label>
                                                        <input type="email" id="email" name="email" required className="schedule-demo-input" placeholder="Your email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="schedule-demo-field">
                                                        <label htmlFor="demo-course">Course</label>
                                                        <select className="schedule-demo-select" name="course" required id="demo-course" defaultValue="">
                                                            <option value="" disabled>Select course</option>
                                                            <option value="Amazon Web Services">Amazon Web Services</option>
                                                            <option value="Microsoft Azure">Microsoft Azure</option>
                                                            <option value="DevOps Professional">DevOps Professional</option>
                                                            <option value="Azure DevOps">Azure DevOps</option>
                                                            <option value="Google Cloud Platform">Google Cloud Platform</option>
                                                            <option value="Artificial intelligence">Artificial intelligence</option>
                                                            <option value="Machine Learning">Machine Learning</option>
                                                            <option value="Data Science">Data Science</option>
                                                            <option value="Project Oriented Python">Project Oriented Python</option>
                                                            <option value="Docker Certified Associate">Docker Certified Associate</option>
                                                            <option value="Certified Kubernetes Administrator">Certified Kubernetes Administrator</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-4">
                                                    <button type="submit" className="btn bg-gradient-success w-100 mb-0">SEND MESSAGE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </page>
    );
}

export default ScheduleDemo;

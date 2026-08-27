import React from "react";

function LocatnPage() {
    return (
        <section className="py-5 bg-light position-relative">
            <div className="container content-course-details">
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center">
                        <h2 className="fnt-clr-head">Achieve your goals with us</h2>
                        <p className="font-weight-normal fnt-clr-txt">Any questions on your mind? Just write us a message!</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12 mx-auto content-course-details">
                        <div className="card">
                            <div className="row">
                                <div className="col-lg-6 d-flex">
                                    <div className="container">
                                        <div id="map-container-google-1" className=" z-depth-1-half map-container py-4" style={{height: "100%",width:"100%" }}>
                                            <iframe
                                                title="Google Map showing our office location"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4486.763193842221!2d73.940253!3d18.5526414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3d86901a0c3%3A0xdc9dbed04b67b0ef!2sOpen!5e1!3m2!1sen!2sin!4v1787045100002!5m2!1sen!2sin"
                                                
                                                style={{width:'100%',height:'100%', border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <form id="contact-form" method="post" autoComplete="off">
                                        <div className="card-body p-4 position-relative">
                                            <div className="row">
                                                <div className="col-12 text-start mb-3"><h5 className="fnt-clr-head text-center">Drop us a query</h5></div>
                                                <div className="col-md-6">
                                                    <div className="input-group input-group-static mb-4">
                                                        <label htmlFor="name">Name</label>
                                                        <input type="text" className="schedule-demo-input" required id="name" name="name" placeholder="Your name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 ps-2">
                                                    <div className="input-group input-group-static mb-4">
                                                        <label htmlFor="mobile_no">Contact number</label>
                                                        <input type="tel" className="schedule-demo-input" required maxLength="10" id="mobile_no" name="mobile_no" placeholder="Your contact" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="input-group input-group-static mb-4">
                                                        <label htmlFor="email">Email Address</label>
                                                        <input type="email" id="email" name="email" required className="schedule-demo-input" placeholder="Your email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-group input-group-static mb-4">
                                                        <label htmlFor="demo-course">Course</label>
                                                        <select className="schedule-demo-select" name="course" required id="demo-course" defaultValue="">
                                                            <option value="" disabled>Select</option>
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
                                                <div className="col-md-6">
                                                    <div className="input-group input-group-static mb-4">
                                                        <label htmlFor="demo-course">Profession Type</label>
                                                        <select className="schedule-demo-select" name="profession" required id="demo-course" defaultValue="">
                                                            <option value="" disabled>Select</option>
                                                            <option value="Amazon Web Services">IT</option>
                                                            <option value="Amazon Web Services">Non-IT</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-group input-group-static mb-4">
                                                        <label htmlFor="demo-course">Job status</label>
                                                        <select className="schedule-demo-select" name="profession" required id="demo-course" defaultValue="">
                                                            <option value="" disabled>Select</option>
                                                            <option value="Amazon Web Services">Employed</option>
                                                            <option value="Amazon Web Services">Unemployed</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-group input-group-static mb-4">
                                                        <label htmlFor="demo-course">Training type</label>
                                                        <select className="schedule-demo-select" name="profession" required id="demo-course" defaultValue="">
                                                            <option value="" disabled>Select</option>
                                                            <option value="Amazon Web Services">Corporate</option>
                                                            <option value="Amazon Web Services">Regular</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-group input-group-static mb-4">
                                                        <label htmlFor="demo-course">Batch type</label>
                                                        <select className="schedule-demo-select" name="profession" required id="demo-course" defaultValue="">
                                                            <option value="" disabled>Select</option>
                                                            <option value="Amazon Web Services">Weekday</option>
                                                            <option value="Amazon Web Services">Weekend</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-group input-group-static mb-4">
                                                        <label htmlFor="demo-course">Estimated joining</label>
                                                        <select className="schedule-demo-select" name="profession" required id="demo-course" defaultValue="">
                                                            <option value="" disabled>Select</option>
                                                            <option value="Amazon Web Services">Immediate</option>
                                                            <option value="Amazon Web Services">Within 1 week</option>
                                                            <option value="Amazon Web Services">Within 2 weeks</option>
                                                            <option value="Amazon Web Services">Within 3 to 4 weeks</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center mt-4">
                                                <button type="submit" class="btn btn-lg bg-gradient-success sd mb-0">SEND MESSAGE</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocatnPage;
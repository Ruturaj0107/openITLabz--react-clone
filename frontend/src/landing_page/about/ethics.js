import React from "react";

function Ethics(){
    return(
        <section className="bg-common-banner-overlay" style={{backgroundImage:'url(./assets/vision-mission.jpg)',height:'525px',backgroundSize:'cover'}}>
            <span className="bg-leadership-img bg-common-banner-overlay opacity-5" style={{position:'absolute',backgroundPosition:'center center',width:'98%',height:'33em',opacity:'0.4'}}></span>
            <div className="container leadership-ethic">
                <div className="row mx-auto my-lg-auto">
                    <div className="col-lg-6 d-flex justify-content-center flex-column">
                        <div id="carouselExampleIndicator" className="carousel slide py-7" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <h3 className="text-white mb-1 fnt-clr-head pb-4">Code of Ethics!</h3>
                                <hr className="text-white hidden horizontal opacity-6 mb-4 mt-2 w-25 text-start"/>
                                <div className="carousel-item active">
                                    <h5 className="text-white mb-0">Vision</h5>
                                    <h6 className="text-light pe-lg-5 text-justify fnt-clr-txt" style={{opacity:'0.85', lineHeight:'1.5rem'}}>"OpenItLabz aims to develop the overall personality of the students with the vision of not only turning them into excellent professionals but also nurturing them into productive individuals of society."</h6>
                                </div>
                                <div className="carousel-item">
                                    <h5 className="text-white mb-0">Mission</h5>
                                    <h6 className="text-white pe-lg-5 text-justify fnt-clr-txt" style={{opacity:'0.85', lineHeight:'1.5rem'}}>"We aspire to be an innovation-driven company focused on knowledge sharing and openness. Along with personal success, the growth of our Nation is paramount to us."</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 justify-content-center flex-column d-sm-none d-md-none d-lg-flex d-xl-flex">
                        <div className="row justify-content-center d-none d-md-flex">
                            <div className="col-3 mb-4">
                                {/* logo */}
                                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-8 mt-n3 fadeIn2 fadeInBottom">
                                    <img src="./assets/amazon.svg" alt="gg"/>
                                </div>
                                {/* logo */}
                            </div>
                            <div className="col-4 mb-4">
                                {/* logo */}
                                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-8 mt-n6 fadeIn2 fadeInBottom">
                                    <img src="./assets/ansible.svg" alt="gg"/>
                                </div>
                                {/* logo */}
                            </div>
                            <div className="col-4 mb-4">
                                {/* logo */}
                                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-6 mt-2 fadeIn3 fadeInBottom">
                                    <img src="./assets/azure.svg" alt="gg"/>
                                </div>
                                {/* logo */}
                            </div>
                        </div>
                        <div className="row justify-content-end d-none d-md-flex">
                            <div className="col-4 my-4">
                                {/* logo */}
                                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-4 fadeIn2 fadeInBottom">
                                    <img src="./assets/kubernetes.svg" alt="gg"/>
                                </div>
                                {/* logo */}
                            </div>
                            <div className="col-3 my-4">
                                {/* logo */}
                                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 me-auto fadeIn2 fadeInBottom">
                                    <img src="./assets/github.svg" alt="gg"/>
                                </div>
                                {/* logo */}
                            </div>
                            <div className="col-3 my-4">
                                {/* logo */}
                                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-3 mt-3 fadeIn3 fadeInBottom">
                                    <img src="./assets/google-cloud.svg" alt="gg"/>
                                </div>
                                {/* logo */}
                            </div>
                        </div>
                        <div className="row d-none d-md-flex">
                            <div className="col-6">
                                {/* logo */}
                                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-auto mt-5 fadeIn2 fadeInBottom">
                                    <img src="./assets/docker.svg" alt="gg"/>
                                </div>
                                {/* logo */}
                            </div>
                            <div className="col-6 mt-6">
                                {/* logo */}
                                <div className="d-block bg-white avatar avatar-lg border-radius-lg p-3 mx-auto mt-n3 fadeIn2 fadeInBottom">
                                    <img src="./assets/puppet.svg" alt="gg"/>
                                </div>
                                {/* logo */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Ethics;
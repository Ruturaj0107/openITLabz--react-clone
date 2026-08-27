import React from "react";

function GalleryPage(){
    return(
        <>
        <header className="">
                <div className="page-header min-vh-75 bg-demo-banner" style={{ backgroundImage: 'url(./assets/gallery.jpg)', backgroundPosition: '50%' }}>
                    <span className="mask bg-common-banner-overlay opacity-4 position-absolute top-0 start-0 w-100 h-100"></span>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 my-auto">
                                <div className="brand">
                                    <h2 className="text-light mb-0" style={{ color: '#ffffff !important' }}>
                                        Glimpse into OpenITLabz
                                    </h2>
                                    <p className="text-white fw-bold" style={{ opacity: '0.75' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="col-lg-5 my-auto">
                                {/* <img></img> */}
                            </div>
                        </div>
                    </div>
                </div>
        </header>
        <div className="bg_div card card-body shadow-blur mx-3 mx-md-4 mt-n6" style={{ transform: "translateY(-70px)", border: 'none' }}>
            <div className="container my-5">
                <div className="row photos">
                    <div class="col-sm-6 col-md-4 col-lg-3 py-2 item">
                        <a href="./assets/1.jpg" data-lightbox="photos">
                            <img class="img-fluid" alt="1" src="./assets/1.jpg"/>
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 py-2 item">
                        <a href="#/" data-lightbox="photos">
                            <img class="img-fluid" alt="1" src="./assets/2.jpg"/>
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 py-2 item">
                        <a href="#/" data-lightbox="photos">
                            <img class="img-fluid" alt="1" src="./assets/3.jpg"/>
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 py-2 item">
                        <a href="#/" data-lightbox="photos">
                            <img class="img-fluid" alt="1" src="./assets/4.jpg"/>
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 py-2 item">
                        <a href="#/" data-lightbox="photos">
                            <img class="img-fluid" alt="1" src="./assets/5.jpg"/>
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 py-2 item">
                        <a href="#/" data-lightbox="photos">
                            <img class="img-fluid" alt="1" src="./assets/6.jpg"/>
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 py-2 item">
                        <a href="#/" data-lightbox="photos">
                            <img class="img-fluid" alt="1" src="./assets/7.jpg"/>
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 py-2 item">
                        <a href="#/" data-lightbox="photos">
                            <img class="img-fluid" alt="1" src="./assets/8.jpg"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default GalleryPage;
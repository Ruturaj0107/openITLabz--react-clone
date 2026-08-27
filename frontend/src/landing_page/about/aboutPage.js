import React from "react";
import AboutHero from "./hero";
import Quote from "./quote";
import TeamPage from "./team";
import Quality from "./quality";
import Ethics from "./ethics";

function AboutPage(){
    return(
        <>
        <header className="">
            <div className="page-header min-vh-75 bg-demo-banner" style={{backgroundImage:'url(./assets/leadership-banner.jpg)',backgroundPosition:'50%'}}>
                <span className="mask bg-common-banner-overlay opacity-4 position-absolute top-0 start-0 w-100 h-100"></span>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 my-auto">
                            <div className="brand">
                                <h2 className="text-light mb-0" style={{color:'#ffffff !important'}}>
                                    A Dynamic IT Institute
                                </h2>
                                <p className="text-white fw-bold" style={{opacity:'0.75'}}>Our exceptional and dedicated team here at OpenITLabz has one goal - making your dream software career a reality.</p>
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
            <AboutHero/>
            <Quote/>
            <TeamPage/>
            <Quality/>
            <Ethics/>
        </div>
        </>
    );
}

export default AboutPage;
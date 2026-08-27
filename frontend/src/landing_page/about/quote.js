import React from "react";

function Quote(){
    return(
        <section className="pt-5 pb-5" style={{marginBottom:'125px'}}>
            <div className="container content-course-details h-80 pt-2">
                <div className="row mb-5">
                    <div className="border-radius-lg leadership-quote bg-leadership-img" style={{backgroundImage:'url("./assets/quot-leadership.jpg")'}}>
                        <span className="bg-leadership-img bg-common-banner-overlay opacity-5" style={{position:'absolute',backgroundPosition:'center center',width:'70%',opacity:'0.4'}}></span>
                        <div className="row py-5 d-flex justify-content-center">
                            <div className="col-md-8 col-12 z-index-2 text-center position-relative px-md-3 mt-lg-5 px-3">
                                <i class="material-icons text-white text-5xl">"</i>
                                <p className="text-white" style={{fontSize:'30px'}}>
                                The purpose of learning is growth and we aspire to be the harbingers of this growth for our students.</p>
                                <p className="text-white font-weight-bold text-md">
                                    Mohammad -  
                                    <span class="text-xs font-weight-normal">Founder &amp; Mentor</span>
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
}


export default Quote;
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "bootstrap";

const STATISTIC_TARGETS = [10, 500, 100, 50, 40];



function Homehero() {
  const carouselRef = useRef(null);
  const carouselInstance = useRef(null);
  const statsRef = useRef(null);
  const hasAnimatedStats = useRef(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 480);
  const [statistics, setStatistics] = useState(() => STATISTIC_TARGETS.map(() => 0));

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth <= 480);

    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    carouselInstance.current = new Carousel(carouselRef.current, {
      interval: 3000,
      ride: "carousel",
      wrap: true,
    });
  }, []);

  useEffect(() => {
    const statsSection = statsRef.current;
    if (!statsSection) return undefined;

    let animationFrame;
    const startCountUp = () => {
      if (hasAnimatedStats.current) return;
      hasAnimatedStats.current = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setStatistics(STATISTIC_TARGETS);
        return;
      }

      const duration = 1600;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setStatistics(STATISTIC_TARGETS.map((target) => Math.round(target * easedProgress)));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCountUp();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(statsSection);

    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <header id="home-hero" className="mt-6">
      <div ref={carouselRef} id='carouselExampleControls' className="carousel slide pointer-event" data-bs-ride="carousel" style={{ maxHeight: '100%', backgroundImage: `url(./assets/${isMobile ? 'Background_vertical.jpg' : 'Horizontal_background.jpg'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="page-header min-vh-100 home-banner" loading="lazy">
              <div className="container-fluid z-index-0">
                <div className="row header-image-padding">
                  <div className="col-md-6 px-lg-6 mx-lg-auto my-lg-auto d-flex justify-content-center">
                    <div className="carousel-text1 w-lg-80 w-100 col-md-5">
                      <h2 className="fadeIn2 fadeInBottom fnt-clr-head" style={{fontSize:'2.25rem'}}>DevOps Program</h2>
                      <p className="fnt-clr-p fadeIn3 fadeInBottom fnt-clr-txt text-justify" style={{fontWeight:'600',fontSize:'1rem',lineHeight:'2rem'}}>
                        Master tools like Jenkins, Git, Kubernetes, Prometheus, Terraform, Nexus, and Docker with our comprehensive DevOps courses
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                    <img className="home-hero-image w-lg-80 w-100 mt-lg-0 mt-2 border-radius-lg" src="./assets/DevOps-student.png" alt="devops" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="page-header min-vh-100 home-banner" loading="lazy">
              <div className="container-fluid z-index-0">
                <div className="row header-image-padding">
                  <div className="col-md-6 px-lg-6 mx-lg-auto my-lg-auto d-flex justify-content-center">
                    <div className="carousel-text1 w-lg-80 w-100 col-md-5">
                      <h2 className="fadeIn2 fadeInBottom fnt-clr-head" style={{fontSize:'2.25rem'}}>Amazon web services</h2>
                      <p className="fnt-clr-p fadeIn3 fadeInBottom fnt-clr-txt text-justify" style={{fontWeight:'600',fontSize:'1rem',lineHeight:'2rem'}}>
                        We cover all Amazon-designated best practices in our Amazon Web Services training course. What are you waiting for? Become a Cloud Architect with OpenITLabz!
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                    <img className="home-hero-image w-lg-70 w-100 mt-lg-0 mt-2 border-radius-lg" src="./assets/AWS-student.png" alt="aws" style={{width:'50px'}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="page-header min-vh-100 home-banner" loading="lazy">
              <div className="container-fluid z-index-0">
                <div className="row header-image-padding">
                  <div className="col-md-6 px-lg-6 mx-lg-auto my-lg-auto d-flex justify-content-center">
                    <div className="carousel-text1 w-lg-80 w-100 col-md-5">
                      <h2 className="fadeIn2 fadeInBottom fnt-clr-head" style={{fontSize:'2.25rem'}}>Microsoft Azure</h2>
                      <p className="fnt-clr-p fadeIn3 fadeInBottom fnt-clr-txt text-justify" style={{fontWeight:'600',fontSize:'1rem',lineHeight:'2rem'}}>
                        Develop and deploy applications over Microsoft Azure. Get ahead of the competition with our software programs. After all, the future of cloud is Azure!
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                    <img className="home-hero-image w-lg-80 w-100 mt-lg-0 mt-2 border-radius-lg" src="./assets/Azure-student.png" alt="azure" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-vh-100 position-absolute w-100 top-0">
          <a className="carousel-control-prev ms-n5" href="#carouselExampleControls" role="button" data-slide="prev" onClick={(e) => {
            e.preventDefault();
            carouselInstance.current.prev();
          }}>
            <span className="carousel-control-prev-icon position-absolute bottom-50 z-index-1"></span>
            <span className="visually-hidden text-dark">Previous</span>
          </a>
          <a className="carousel-control-next me-n5" href="#carouselExampleControls" role="button" data-slide="next" onClick={(e) => {
            e.preventDefault();
            carouselInstance.current.next();
          }}>
            <span className="carousel-control-next-icon position-absolute bottom-50"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <section ref={statsRef} className="numbers my-5" id="count-stats">
        <div className="container" id="counter">
            <div className="row d-flex align-items-center justify-content-center g-4">
              <h2 className="stats-heading text-center fnt-clr-head" style={{marginBottom:"64px", padding:"y 14px"}}>
                We consistently live up to your expectations</h2>
              <div className="col-md-2 p-0 mx-3 justify-content-center text-center">
                <div className="numbers-box">
                  <h1 className="text-gradient text-primary z-index-0 counter-value" data-count="10" >{statistics[0]}+</h1>
                  <h5 className="mt-3 fnt-clr-head" style={{color:"#253c7f", fontWeight:"600"}}>
                    Years in<br/>Market
                  </h5>
                  <p className="fnt-clr-txt text-justify">
                    Rich experience of over a decade. We are proud to feature among the best software training institutes in Pune.
                  </p>
                </div>
              </div>
              <div className="col-md-2 p-0 mx-3 justify-content-center text-center">
                <div className="numbers-box">
                  <h1 className="text-gradient text-primary z-index-0 counter-value" data-count="500">{statistics[1]}+</h1>
                  <h5 className="mt-3 fnt-clr-head" style={{color:"#253c7f", fontWeight:"600"}}>
                    Students<br/>Trained
                  </h5>
                  <p className="fnt-clr-txt text-justify">
                    We continue to build and shape the careers of tomorrow. What are you waiting for? Yes, yours can be next!                  
                  </p>
                </div>
              </div>
              <div className="col-md-2 p-0 mx-3 justify-content-center text-center">
                <div className="numbers-box">
                  <h1 className="text-gradient text-primary z-index-0 counter-value" data-count="100">{statistics[2]}+</h1>
                  <h5 className="mt-3 fnt-clr-head" style={{color:"#253c7f", fontWeight:"600"}}>
                    Student<br/>Placed
                  </h5>
                  <p className="fnt-clr-txt text-justify">
                    Our students work at some of the best global companies—Wipro, L&T, Samsung, TCS, Allscripts, and more.
                  </p>
                </div>
              </div>
              <div className="col-md-2 p-0 mx-3 justify-content-center text-center">
                <div className="numbers-box">
                  <h1 className="text-gradient text-primary z-index-0 counter-value" data-count="50">{statistics[3]}+</h1>
                  <h5 className="mt-3 fnt-clr-head" style={{color:"#253c7f", fontWeight:"600"}}>
                    Corporate<br/>Trainings
                  </h5>
                  <p className="fnt-clr-txt text-justify">
                    Several companies have nurtured their talent with us. Get in touch for an exclusive training program designed just for you.
                  </p>
                </div>
              </div>
              <div className="col-md-2 p-0 mx-3 justify-content-center text-center">
                <div className="numbers-box">
                  <h1 className="text-gradient text-primary z-index-0 counter-value" data-count="40">{statistics[4]}+</h1>
                  <h5 className="mt-3 fnt-clr-head" style={{color:"#253c7f", fontWeight:"600"}}>
                    Trainers<br/>Associated
                  </h5>
                  <p className="fnt-clr-txt text-justify">
                    Our strength lies in the competence of our staff. Their commitment to the students and depth of knowledge is unparalleled.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </header>
  );


}

export default Homehero;




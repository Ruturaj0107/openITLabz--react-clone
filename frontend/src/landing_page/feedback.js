import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const courses = [
  "Amazon Web Services", "Microsoft Azure", "DevOps Professional", "Azure DevOps",
  "Google Cloud Platform", "Artificial intelligence", "Machine Learning", "Data Science",
  "Project Oriented Python", "Docker Certified Associate", "Certified Kubernetes Administrator",
];

function Feedback() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      setHasAutoOpened(false);
      return undefined;
    }

    if (hasAutoOpened) {
      return undefined;
    }

    const openAfterHero = () => {
      const homeHero = document.getElementById("home-hero");

      if (homeHero && homeHero.getBoundingClientRect().bottom <= 0) {
        setIsOpen(true);
        setHasAutoOpened(true);
      }
    };

    openAfterHero();
    window.addEventListener("scroll", openAfterHero, { passive: true });

    return () => window.removeEventListener("scroll", openAfterHero);
  }, [pathname, hasAutoOpened]);

  return (
    <aside className="quick-enquiry" aria-label="Quick enquiry">
      {isOpen && (
        <section className="quick-enquiry-card shadow-lg" aria-labelledby="query-title">
          <div className="quick-enquiry-header d-flex align-items-center justify-content-center">
            <h2 id="query-title" className="mb-0">Drop us a query</h2>
            <button className="quick-enquiry-close btn p-0" type="button" aria-label="Close enquiry form" onClick={() => setIsOpen(false)}>&times;</button>
          </div>
          <form className="quick-enquiry-form" onSubmit={(event) => event.preventDefault()}>
            <div className="mb-2">
              <label className="form-label" htmlFor="query-name">Name</label>
              <input className="form-control" id="query-name" name="name" placeholder="Your name" required />
            </div>
            <div className="mb-2">
              <label className="form-label" htmlFor="query-contact">Contact</label>
              <input className="form-control" id="query-contact" name="contact" type="tel" placeholder="Your contact" required />
            </div>
            <div className="mb-2">
              <label className="form-label" htmlFor="query-email">Email</label>
              <input className="form-control" id="query-email" name="email" type="email" placeholder="Your email" required />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="query-course">Course</label>
              <select className="form-select" id="query-course" name="course" defaultValue="" required>
                <option value="" disabled>Select course</option>
                {courses.map((course) => <option key={course} value={course}>{course}</option>)}
              </select>
            </div>
            <button className="btn quick-enquiry-submit w-100" type="submit">SUBMIT</button>
          </form>
        </section>
      )}
      <button className="quick-enquiry-trigger" type="button" aria-expanded={isOpen} onClick={() => setIsOpen(true)}>Quick Enquiry</button>
    </aside>
  );
}

export default Feedback;

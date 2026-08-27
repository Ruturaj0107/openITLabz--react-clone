import React from "react";

function NotFound() {
  return (
    <section className="my-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-auto">
            <h1 className="display-1 text-bolder text-gradient text-danger">ERROR 404</h1>
            <h2>Page not found</h2>
          </div>
          <div className="col-lg-6 my-auto">
            <img className="w-100 position-relative" src="./assets/error-404.png" alt="404-error"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
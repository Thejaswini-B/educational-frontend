import React from "react";
import { Link } from "react-router-dom";
import MyCarousel from "./MyCarousel";

const Home = () => {
  return (
    <>
      <div className="bg-cont">
        <nav className="navbar navbar-expand-lg  bg-body-tertiary">
          <div className="container-fluid">
            <div className="d-flex flex-row">
              <img
                style={{ borderRadius: 50, height: 40, width: 40 }}
                src="assets/logo.jpg"
                alt="logos"
              />
              <h6 style={{ paddingLeft: 10, paddingTop: 9 }}>
                RO-ONE Ed-Tutorials
              </h6>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/allvideos">
                    Tutorials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  " aria-current="page" href="/about">
                    About-us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  " aria-current="page" href="/contact">
                    Contact-us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container ">
          <div className="row">
            <div className="col-sm-12 col-lg-6 " style={{ padding: 40 }}>
              <h1 className="heading">
                {" "}
                Empowering Your Learning Journey: Expert Tutorials Tailored for
                You
              </h1>

              <p className="para">
                We believe in making learning simple, effective, and accessible.
                Our tutorials are curated by experts, designed for both
                beginners and advanced learners. Dive into a diverse range of
                topics, each explained with clarity and a focus on real-world
                applicability. With our guidance, transform your curiosity into
                knowledge and expertise. Join us, and let's embark on a journey
                of discovery together.
              </p>
              <p>WANT TO EXPLORE YOUR LEARNINGS ?</p>
              <Link to="/login">
                <button className="btn btn-primary">ENROLL NOW</button>
              </Link>
            </div>
            <div className="col-sm-12 col-lg-6">
              <MyCarousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

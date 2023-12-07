import React from "react";
import Header from "../components/Header";
import Education from './Education'
import Skills from './Skills'
import Interest from './Interest'
import Contact from './Contact'


const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        
        <section className="resume-section my-3 my-lg-0 " id="about">
          <div className="fl">
          <img
              className="img-fluid rounded-circle mb-4 "
              src="image.jpg"
              alt="..."
          />
          </div>
          
          <div className="resume-section-content">
            <h1 className="mb-0">
              khalid
              <span className="text-primary">daji</span>
            </h1>
            <div className="subheading mb-5">
              dr zaouiat antri · oulad dlim, el bour · marrakech ·{" "}
              <a href="mailto:kha.daji987@gmail.com">kha.daji987@gmail.com</a>
            </div>
            <p className="lead mb-5">
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
            <div className="social-icons">
              <a className="social-icon" href="https://www.linkedin.com/in/khalid-daji-5150b52a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i class="fab fa-linkedin"></i>
              </a>
              <a className="social-icon" href="https://github.com/Daji2002">
                <i class="fab fa-github"></i>
              </a>
              <a className="social-icon" href="https://www.facebook.com/daji.khalid">
                <i class="fab fa-facebook"></i>
              </a>
              <a className="social-icon" href="@Daji_khalid">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
          <Education/>
          <Skills/>
          <Interest/>
          <Contact />
      </div>
    </>
  );
};

export default Home;

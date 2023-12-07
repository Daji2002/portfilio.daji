import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div className="container-fluid p-0">
       <Header/>

        <section className="resume-section mx-2" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">ista ntic syba</h3>
                <div className="subheading mb-3">digital development</div>
                <div>developer front-end</div>
                <p>framework</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">september 2022 - Present</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">dakhla preparatory secondary school</h3>
                <div className="subheading mb-3">baccalaureate</div>
                <p>science physic</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">September 20021 - May 2022</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Education;

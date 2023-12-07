import React from "react";
import Header from "../components/Header";

const Award = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Contact</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-envelope text-warning"></i>
                </span>
                kha.daji987@gmail.com
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-phone text-warning"></i>
                </span>
                06 89 86 97 34
              </li>
              <li>
                <span class="fa-li">
                  <i class="fab fa-whatsapp text-warning"></i>
                </span>
                06 33 95 89 72
              </li>
            </ul>
            <div className="social-icons float-end">
              <a className="social-icon" href="https://www.linkedin.com/in/khalid-daji-5150b52a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i class="fab fa-linkedin"></i>
              </a>
              <a className="social-icon" href="https://github.com/Daji2002">
                <i class="fab fa-github"></i>
              </a>
              <a className="social-icon" href="https://www.facebook.com/daji.khalid">
                <i class="fab fa-facebook"></i>
              </a>
              <a className="social-icon" href="t.me/Daji_khalid">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Award;

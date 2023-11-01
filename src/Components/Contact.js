import React from "react";

const Contact = () => {
  return (
    <div className="contact_css">
      <div class="container  ">
        <div class="row">
          <div class="col-12 ">
            <h1 class="follow-us-section-heading">CONTACT US</h1>
            <p>
              At RO-ONE Ed-Tutorials, we're passionate about fostering learning
              and growth. If you have questions, feedback, or simply want to
              know more about our tutorials, we'd love to hear from you. Whether
              you're a student seeking clarity, a teacher eager to collaborate,
              or just a curious mind, your perspective matters to us. Dive
              deeper into the world of online education and make your learning
              journey count. Reach out today, and let's shape a brighter,
              knowledgeable future together.
            </p>
          </div>

          <div class="col-12">
            <div class="d-flex flex-row justify-content-center">
              <a
                target="_blank"
                // href="https://www.linkedin.com/in/thejaswini-bandaru-0b3752245/"
                href="/"
                class="follow-us-icon-container"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin icon"></i>
              </a>
              <a
                class="follow-us-icon-container"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-instagram icon"></i>
              </a>

              <a
                target="_blank"
                href="/"
                class="follow-us-icon-container"
                rel="noopener noreferrer"
              >
                <i class="fab fa-whatsapp icon"></i>
              </a>
              <a
                target="_blank"
                href="/"
                class="follow-us-icon-container"
                rel="noopener noreferrer"
              >
                <i class="fas fa-envelope-square icon"></i>
              </a>
              <a
                target="_blank"
                href="/"
                class="follow-us-icon-container"
                rel="noopener noreferrer"
              >
                <i class="fas fa-phone alt icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

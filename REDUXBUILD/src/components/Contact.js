import React from "react";

const Contact = () => {
  return (
    <section className="green">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Contact</h5>
            <p className="grey-text text-lighten-4">
              We're reachable at{" "}
              <a
                className="grey-text text-lighten-4"
                href="mailto:helloworld@messiah.edu"
              >
                helloworld@messiah.edu
              </a>
            </p>
            <p className="grey-text text-lighten-4">
              You can also contact us via{" "}
              <a
                className="white-text"
                href="https://www.facebook.com/MCHelloWorld/"
              >
                our facebook page
              </a>
            </p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">
              <a className="btn-large green" href="/contact/Members">
                Members
              </a>
            </h5>
            <p className="grey-text text-lighten-4">
              This is a placeholder for dynamically updated Members profiles.
            </p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">
              <a className="btn-large green" href="/contact/alumni">
                Alumni
              </a>
            </h5>
            <p className="grey-text text-lighten-4">
              This is a placeholder for dynamically alumni profiles.
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">&nbsp;</div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";

const About = () => {
  return (
    <section className="blue">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">About Hello World</h5>
            <p className="grey-text text-lighten-4">
              Hello World exists to present Computer Science topics beyond what
              the curriculum at Messiah College has to offer in an environment
              that is tailored towards those who are beginners in the world of
              Computer Science.
            </p>
            <p className="grey-text text-lighten-4">
              We're here foster a community of growth mindset learners that are
              passionate about creativity in Computer Science.
            </p>
            <p className="grey-text text-lighten-4">
              Let's explore the joy of Computer Science and encourage technical
              and personal leadership skills in its officers and members.
            </p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Why this Website Exists</h5>
            <p className="grey-text text-lighten-4">
              This website exists to house intra-club functionality offered to
              members of hello world and programming team.
            </p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Social</h5>
            <ul>
              <li>
                <a
                  className="white-text"
                  href="https://www.facebook.com/MCHelloWorld/"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">&nbsp;</div>
      </div>
    </section>
  );
};

export default About;

import React, { Component } from "react";
import Fade from "react-reveal";
import Eeztek from "../images/Eeztek.png"

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={Eeztek}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About</h2>

              <p>Eeztek is a service-based IT company that helps businesses of all sizes to achieve their goals with technology. We offer a comprehensive range of IT services, including managed IT services, cloud computing, cybersecurity, application development, and IT consulting.

                Our team of experienced and certified IT professionals is passionate about helping our clients to succeed. We understand that technology can be complex and overwhelming, so we take the time to understand your specific needs and develop tailored solutions that meet your budget and goals.</p>
                <p>We believe that technology should be a tool that helps businesses to grow and succeed, not a burden. That's why we offer a wide range of services and support to help our clients get the most out of their IT infrastructure.

Whether you're looking for a managed IT services provider to handle all of your IT needs, or you need help with a specific project, such as migrating to the cloud or developing a new application, we can help.

We're committed to providing our clients with high-quality services and support at competitive prices. We're also committed to building long-term relationships with our clients, and we're proud to be a trusted partner for businesses of all sizes.</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;

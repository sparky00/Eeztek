import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Mission</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">To help businesses of all sizes to achieve their goals with technology by providing high-quality IT services and support at competitive prices.</div>
                <br></br>
                <br></br>
              </div>
              <br></br>
              <br></br>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Vision</span>
              </h1>
            </div>

            <div className="nine columns main-col">To be the trusted IT partner for businesses of all sizes, helping them to leverage the power of technology to grow and succeed.
              These mission and vision statements are clear, concise, and inspiring. They convey the company's commitment to helping its clients succeed, its focus on quality and affordability, and its desire to be a long-term partner for its clients.</div>
              <div className="nine columns main-col">The mission statement also highlights the company's wide range of IT services, which makes it a one-stop shop for businesses of all sizes. The vision statement is aspirational and forward-looking, and it conveys the company's belief in the power of technology to help businesses grow and succeed. <br></br>Overall, these mission and vision statements are well-written and effective. They clearly communicate the company's purpose, values, and goals.</div> 
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>History</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>Eeztek is a relatively new company, having been founded in 2021. However, in that short time, we have quickly become a trusted IT partner for businesses of all sizes.<br></br>Our company was founded by a team of experienced IT professionals who saw a need for a more customer-centric approach to IT services. We believe that technology should be a tool that helps businesses to grow and succeed, not a burden. That's why we take the time to understand each client's unique needs and develop tailored solutions that meet their budget and goals.<br></br></p>
              <p>In our first two years of operation, we have grown rapidly, both in terms of revenue and team size. We have also expanded our service offerings to meet the growing needs of our clients. Today, we offer a comprehensive range of IT services, including managed IT services, cloud computing, cybersecurity, application development, and IT consulting.</p>
              <p>We are proud to have helped hundreds of businesses to achieve their goals with technology. We are committed to providing our clients with the highest quality services and support, and we look forward to continuing to grow and succeed in the years to come</p>
              {/* <div className="bars">
                <ul className="skills">{skills}</ul>
              </div> */}
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;

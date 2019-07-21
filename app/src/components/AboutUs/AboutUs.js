import React, { Component } from "react";
import './AboutUs.css';
import AA from "./AA.png";
import AO from "./AO.png";
import MB from "./MB.png";


class AboutUs extends Component {
  render() {
    return (
      <div className="aboutUs">
        <h1>Meet our dev team:</h1>
        <div className="devCard">
          <div>
          <img src={AA} alt="AA" className="Image" />
          <h2 className="AAName">Andrew Armstrong</h2>
          </div>
          <div className="aboutDev">
          <p>
              Spicy jalapeno bacon ipsum dolor amet sausage shank pancetta,
              t-bone tail doner pork belly capicola shankle tongue. Landjaeger
              ground round prosciutto corned beef pork, strip steak tail.
              Brisket ham hock andouille tongue pork chop rump ground round.
              Tongue prosciutto pancetta porchetta corned beef salami. Hamburger
              frankfurter ham hock turkey, kielbasa brisket sausage. Meatball
              flank kevin pancetta bresaola frankfurter bacon hamburger beef
              ribs leberkas rump tongue salami kielbasa.
            </p>
          </div>
            <form className="contactForm">
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name..."/>

              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name..."/>

              <label for="email">Email Address</label>
              <input type="text" id="email" name="email" placeholder="Your email address..."/>

              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Send Andrew a messaage.."></textarea>

              <input type="submit" value="Submit"/>
            </form>
        </div>
        <div className="devCard">
          <div>
          <img src={AO} alt="AO" className="Image" />
          <h2 className="AOName">Andrew Ogle</h2>
          </div>
          <div className="aboutDev">
          <p>
              Spicy jalapeno bacon ipsum dolor amet sausage shank pancetta,
              t-bone tail doner pork belly capicola shankle tongue. Landjaeger
              ground round prosciutto corned beef pork, strip steak tail.
              Brisket ham hock andouille tongue pork chop rump ground round.
              Tongue prosciutto pancetta porchetta corned beef salami. Hamburger
              frankfurter ham hock turkey, kielbasa brisket sausage. Meatball
              flank kevin pancetta bresaola frankfurter bacon hamburger beef
              ribs leberkas rump tongue salami kielbasa.
            </p>
          </div>
            <form className="contactForm">
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name..."/>

              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name..."/>

              <label for="email">Email Address</label>
              <input type="text" id="email" name="email" placeholder="Your email address..."/>

              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Send Andrew a messaage.."></textarea>

              <input type="submit" value="Submit"/>
            </form>
        </div>
        <div className="devCard">
          <div>
          <img src={MB} alt="MB" className="Image" />
          <h2 className="MBName">Marcus Bass</h2>
          </div>
          <div className="aboutDev">
          <p>
              Spicy jalapeno bacon ipsum dolor amet sausage shank pancetta,
              t-bone tail doner pork belly capicola shankle tongue. Landjaeger
              ground round prosciutto corned beef pork, strip steak tail.
              Brisket ham hock andouille tongue pork chop rump ground round.
              Tongue prosciutto pancetta porchetta corned beef salami. Hamburger
              frankfurter ham hock turkey, kielbasa brisket sausage. Meatball
              flank kevin pancetta bresaola frankfurter bacon hamburger beef
              ribs leberkas rump tongue salami kielbasa.
            </p>
          </div>
            <form className="contactForm">
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name..."/>

              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name..."/>

              <label for="email">Email Address</label>
              <input type="text" id="email" name="email" placeholder="Your email address..."/>

              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Send Marcus a messaage.."></textarea>

              <input type="submit" value="Submit"/>
            </form>
        </div>
      {/* <div className = "tagline">
      <h1>Who We Are!</h1>
      </div>
        <div className="image-container">
          <div className="profile-image">
            <img src={AA} alt="AA" className="image" />
            <div className="name">Andrew Armstrong</div>
            <p>
              Spicy jalapeno bacon ipsum dolor amet sausage shank pancetta,
              t-bone tail doner pork belly capicola shankle tongue. Landjaeger
              ground round prosciutto corned beef pork, strip steak tail.
              Brisket ham hock andouille tongue pork chop rump ground round.
              Tongue prosciutto pancetta porchetta corned beef salami. Hamburger
              frankfurter ham hock turkey, kielbasa brisket sausage. Meatball
              flank kevin pancetta bresaola frankfurter bacon hamburger beef
              ribs leberkas rump tongue salami kielbasa.
            </p>
            <div>
              <a className="link" href="https://github.com/acarmstrong98">
                <i className="fab fa-github" />
              </a>
              <a className="link" href="/">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="profile-image">
            <img src={AO} alt="AO" className="image" />
            <div className="name">Andrew Ogle</div>
            <p>
              Spicy jalapeno bacon ipsum dolor amet sausage shank pancetta,
              t-bone tail doner pork belly capicola shankle tongue. Landjaeger
              ground round prosciutto corned beef pork, strip steak tail.
              Brisket ham hock andouille tongue pork chop rump ground round.
              Tongue prosciutto pancetta porchetta corned beef salami. Hamburger
              frankfurter ham hock turkey, kielbasa brisket sausage. Meatball
              flank kevin pancetta bresaola frankfurter bacon hamburger beef
              ribs leberkas rump tongue salami kielbasa.
            </p>
            <div>
              <a className="link" href="https://github.com/andrewogle">
                <i className="fab fa-github" />
              </a>
              <a
                className="link"
                href="https://www.linkedin.com/in/andrew-ogle-574ba759/"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="profile-image">
            <img src={MB} alt="MB" className="image" />
            <div className="name">Marcus Bass</div>
            <p>
              I am a full stack Software Engineer. My main technical strengths
              are focused around User interface, User Experience and Web
              Services leveraging the power of Java, PHP, JavaScript, Angular
              and React to create truly unique user experiences. I have deployed
              back-end projects and APIs leveraging Nodejs, Express, MongoDB,
              MySQL, NoSQL, Firebase, AWS, MySQL Workbench and many others. I am
              a certified Professional Scrum Developer via Scrum.org, and have
              hundreds of hours or production experience; working within a team
              to exceed expectations while also meeting business deadlines.
            </p>
            <div>
              <a className="link" href="https://github.com/marcusbass323">
                <i className="fab fa-github" />
              </a>
              <a
                className="link"
                href="https://www.linkedin.com/in/marcus-bass-7598b6106/"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div> */}        
      </div>
    );
  }
}

export default AboutUs;

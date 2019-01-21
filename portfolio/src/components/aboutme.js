import React, { Component } from "react";
import { Grid, Cell} from "react-mdl";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>About Me</h1>
        I'm Bhavik Patel and I'm a Freelance Web Designer. I have over 2 years
        of experience and have been a part of design and development projects
        for an organization.
        <br />I specialize in standards Bootstrap, HTML5, CSS and Javascript web
        development. In addition to that i have experience with various Open
        source Content Management System(CMS) like Wordpress and Opencart. I am
        familier with React framework and created many basic projects using this
        technologies. Each site i develop is build to be search engine friendly,
        using the latest development principles and techniques.
        <ul>
          <li>I am a hardworking, honest individual. </li>
          <li>I am a good timekeeper, always willing to learn new skills.</li>
          <li>
            I am friendly, helpful and polite. I am able to work independently
            in busy environments and also within a team setting.
          </li>
          <li>
            I am outgoing and tactful, and able to listen effectively when
            solving problems.
          </li>
        </ul>
        <br />
        <h3>
          <u>Skills</u>
        </h3>
        <Grid>
          <Cell col={12}>
            <strong>Web Development: </strong>HTML5, CSS, XML, JavaScript,
            jQuery, Bootstrap, C#, React <br />
            <strong>CMS Open Source: </strong>WordPress, OpenCart
            <br />
            <strong>Database Technology:</strong> MySQL, Oracle
            <br />
            <strong>Programing IDEs:</strong> NetBeans, Eclipse, XCode, Visual
            Studio
            <br />
            <strong>Editing Software:</strong> Adobe Photoshop CC, Photoshop CS5
            <br />
            <strong>Other:</strong> MS Office, FileZilla, TeamViewer, SharePoint
            (Basic), cPanel, Familier with GIT and SVM, Google Analytics <br />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;

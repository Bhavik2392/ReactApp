import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import * as FontAwesome from "react-icons/fa";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Bhavik Patel</h1>

              <hr />

              <p>
                Wordpress | Bootstrap | JavaScript | Photoshop | HTML5/CSS |  React |
                NodeJS | Java | C# 
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/bhavikpatel2392/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesome.FaLinkedin size={60} color="white" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/Bhavik2392"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesome.FaGithubSquare size={60} color="white" />
                </a>

                {/* Google Plus*/}
                <a
                  href="https://aboutme.google.com/u/0/?referer=gplus"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesome.FaGooglePlusSquare size={60} color="white" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;

import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={3} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundColor: "#333333"
              }}
            >
              Multimedia Steganography
            </CardTitle>
            <CardText>
              Steganography is the art and science of writing hidden messages in
              such a way that no one apart from the intended recipient knows of
              the existence of the message.
              <br />
              Basically, the purpose of cryptography and steganography is to
              provide secret communication.
              <br />
              <b>Languages Used: </b>JavaFx
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://github.com/Bhavik2392"
                colored
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={3} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundColor: "#333333"
              }}
            >
              Library Management System
            </CardTitle>
            <CardText>
              Library management system project website used to maintain all
              activities of library system such as maintain books stock, issue
              book records, return book records, student detail and also keep
              data of penalty for late return books.
              <br />
              <b>Used:</b> C#, MySQL, Microsoft SQL Server Management Studio 17
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://github.com/Bhavik2392"
                colored
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={3} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundColor: "#333333"
              }}
            >
              Find all Restaurant Detail by City
            </CardTitle>
            <CardText>
              Find all the restaurant by city. I used React framework to build
              this web app and used an API from where i fetch data of an
              restaurant according to city.This is a Simple React web app
              developed while practicing ReactJs.
              <br />
              <b>Used: </b>ReactJs, NodeJs(NPM), Bootstrap, HTML, Javascript,
              Visual Studio
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://github.com/Bhavik2392"
                colored
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="http://techninvention.com/test/index.html"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={3} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundColor: "#333333"
              }}
            >
              Fetching Student detail from an API
            </CardTitle>
            <CardText>
              Find all the student detail through an API and seaching fuction
              for finding student by there first name. In addition to that the
              app calculated the average grades of the student. This is a Simple
              React web app developed while practicing ReactJs.
              <br />
              <b>Used: </b>ReactJs, NodeJs(NPM), Bootstrap, HTML, Javascript,
              Visual Studio
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://github.com/Bhavik2392"
                colored
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="http://techninvention.com/project2/public/index.html"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={3} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundColor: "#333333"
              }}
            >
              Simple Calculator (React)
            </CardTitle>
            <CardText>
              Build a calculator web app using React This is a Simple React web
              app developed while practicing ReactJs.
              <br />
              <b>Used:</b> ReactJs, NodeJs(NPM), Bootstrap, HTML, Javascript,
              Visual Studio
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://github.com/Bhavik2392"
                colored
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="http://techninvention.com/project5/index.html"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={3} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundColor: "#333333"
              }}
            >
              Web Notes App
            </CardTitle>
            <CardText>
              Build a simple web app that can store notes or a task to be
              perform. One can add notes, delete note or edit notes. This is a
              Simple React web app developed while practicing ReactJs. <br />
              <b>Used:</b> ReactJs, NodeJs(NPM), Bootstrap, HTML, Javascript,
              Visual Studio
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://github.com/Bhavik2392"
                colored
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="http://techninvention.com/project6/index.html"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={3} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundColor: "#333333"
              }}
            >
             DOM Pig Game(Javascript)
            </CardTitle>
            <CardText>
            The game has 2 players, playing in rounds. In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score.
            BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.
              <br />
              <b>Used:</b> Bootstrap,HTML5,Javascript, Visual Studio
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://github.com/Bhavik2392"
                colored
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="http://techninvention.com/JavascriptProject/pig-game/index.html"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={3} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundColor: "#333333"
              }}
            >
              Budget App
            </CardTitle>
            <CardText>
              So this is a budget App. This app allows us to add income and expenses for a certain month. 
              And the app can calculates how much money we have made and how much we spent. <br />
              <b>Used:</b> Bootstrap,HTML5,Javascript, Visual Studio
            </CardText>
            <CardActions border>
              <Button
                target="_blank"
                href="https://github.com/Bhavik2392"
                colored
              >
                GitHub
              </Button>
              <Button
                target="_blank"
                href="http://techninvention.com/JavascriptProject/budgetApp/index.html"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>

      </div>
    );
  }
}
export default Projects;

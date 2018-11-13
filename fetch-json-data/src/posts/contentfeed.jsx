import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./search";
import Expand from "./expand";


class ContentFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      average: 0
    };
  }
  componentDidMount() {
    this.getItems();
  }
  getItems() {
    fetch("https://www.hatchways.io/api/assessment/students")
      .then(results => results.json())
      .then(results => {
        this.setState({
          isLoading: false,
          dataSource: results.students
        });
      });
  }
  /* handleAverage(e) {
        let grades = e.map((value, key) => {

            this.setState(this.state.average, e)


        });
        return <h1>{this.state.average}</h1>
    }
 */

  render() {

    if (this.state.isLoading) {
      return <h1>Content not loaded</h1>;
    } else {
      let stud = this.state.dataSource.map((val, key) => {
        return (
        
            <div className="jumbotron row">
              
              <div className="col-sm-3">
                <img
                  className="align-self-center mr-3 shadow-sm"
                  src={val.pic}
                  width="150px"
                />
                </div>
                <div className="col-sm-8">
                  <h3>
                    {val.firstName} {val.lastName}
                  </h3>
                  <Expand />
                  <p className="lead">Email: {val.email}</p>
                  <p className="lead">Company: {val.company}</p>
                  <p className="lead">Skill: {val.skill}</p>
                  <p className="lead">
                    Average:
                    {
                      val.grades
                      ///  this.handleAverage(val.grades)
                    }
                  </p>
                 
                </div>
              </div>
       
     
        )
      })
      return <h1>{stud}</h1>;
    }
  }

}
export default ContentFeed;

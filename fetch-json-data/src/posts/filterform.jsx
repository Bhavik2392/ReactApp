import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.css";
import "bootstrap/dist/css/bootstrap.css";


class FilterForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        poetFilter: ""
      }
    }
    
    handleChange = (e) => {
      this.setState({
        poetFilter: e.target.value
      })
      this.props.onChange(e.target.value)
    }
    
    render() {
      return (
        <div>
           
          <input className="form-control shadow-sm"  type="text" id="filter" placeholder="Search by name"
            value={this.state.poetFilter} 
            onChange={this.handleChange}/>
        </div>
        )
    }
  }
  
  export default FilterForm;
import React, { Component } from "react";
import ReactDOM from "react-dom";
import ContentFeed from "./contentfeed";

class  Search extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Search" />
                <ContentFeed />
            </div>
        );
    }
}
 
export default Search;
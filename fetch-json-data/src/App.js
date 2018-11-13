import React, { Component } from 'react';
import ContentFeed from './posts/contentfeed';
import Search from './posts/search';
class App extends Component {
  render() {
    return (
      <div className="App">
 <main role="main" className="container shadow p-0 mb-0 bg-white rounded" >
  <Search />
</main>
</div>
   
    )
  }
}

export default App;

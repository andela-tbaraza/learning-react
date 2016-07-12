/* eslint-disable no-unused-vars*/
import React from 'react';

// create a component called App
class App extends React.Component {
  // render method returns how we want our html template to look like
  render () {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>Content</h2> {/*h1 and h2 are wrapped in div element */}
      </div>
    );
  }
}

// enables App.jsx to be imported
export default App;

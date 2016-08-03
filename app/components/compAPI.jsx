import React from 'react';

class Comp extends React.Component {
  constructor () {
    super();

    this.state = {
      data: []
    }
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler() {
    const item = "I have no idea!!!";
    let myArray = this.state.data;
    myArray.push(item)
    this.forceUpdate({data: myArray})
  }

  render() {
    return (
      <div>
        <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
        <h2> UPDATE: {this.state.data}</h2>
      </div>
    )
  }
}

export default Comp;

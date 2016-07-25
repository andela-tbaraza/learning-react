/* eslint-disable no-unused-vars*/
// when you want immutable data
import React from 'react';

class Data extends React.Component{
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
        <h2>Array: {this.props.propArray}</h2>
        <h2>Bool: {this.props.propBool}</h2>
        <h2>Number: {this.props.propNumber}</h2>
        <h2>String: {this.props.propString}</h2>
        <h2>Func: {this.props.propFunc(2, 4)}</h2>
        <h2>Object: {this.props.propObject.name}</h2>
        {this.props.children}
      </div>
    );
  }
}

// you can set default props in the component constructor
Data.defaultProps = {
  title: 'Header from props...',
  subtitle: 'Content from props...',
  propArray: [1, 3, 5],
  propBool: true,
  propNumber:45,
  propString: 'yaaaaay',
  propFunc: function(a, b) {return a + b},
  propObject: {
    name: 'TONIDA'
  }
};

// Data.propTypes = {
//   propArray: React.propTypes.array.isRequired,
//   propBool: React.PropTypes.bool.isRequired,
//   propNumber: React.propTypes.number,
//   propString: React.propTypes.string,
//   propFunc: React.propTypes.func,
//   propObject: React.propTypes.object
// };
// then render normally
export default Data;
// render like this in your main.js file
// ReactDOM.render(<Data title = 'Hard Stuff' subtitle = 'but worth it'/>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import Data from './Props.jsx';
// import Comp from './compAPI.jsx';
import Cycle from './Cycle.jsx';

ReactDOM.render(<Cycle/>, document.getElementById('root'));
setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000)

import React from 'react';
// import App from './App.jsx';
// import Data from './Props.jsx';
// import Comp from './compAPI.jsx';
// import Cycle from './Cycle.jsx';

let user = {
  name: 'Windie Amie',
  username : 'andela-tbaraza',
  image: 'https://goo.gl/7glkJ8'
}

class ProfilePic extends React.Component {
  render () {
    return (
      <img src={this.props.imageURL} alt="Mountain View" style={{width: 304, height: 228}}></img>
    );
  }
}

class ProfileLink extends React.Component {
  render () {
    return (
      <a href={'https://github.com/ + this.props.username'}>{this.props.username}</a>
    )
  }
}

class Avatar extends React.Component {
  render () {
    return (
      <div>
        <ProfilePic imageURL={this.props.user.image} />
        <h3>{this.props.user.name}</h3>
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
}
// setTimeout(() => {
//    ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000)
{/*<Avatar user={USER_DATA} />*/}

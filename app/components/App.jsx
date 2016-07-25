/* eslint-disable no-unused-vars*/
import React from 'react';

// create a component called App
class App extends React.Component {
  // render method returns how we want our html template to look like
  constructor(props) {
    super(props);
    this.state = {
      word: 'WORLD',
      data:
      [
        {
          word: 'world is wild and very .....',
          reaction: 'ulala'
        },
        {
          word: 'funny',
          reaction: 'boo'
        },
        {
          word: 'toni',
          reaction:'we will see'
        }

      ]

    }
  }

  render () {
    return (
      <div>
        <h1>Hello {this.state.word}</h1>
        <table>
          <tbody>
            {this.state.data.map((person, index) => <TableRow key = {index} data = {person} />)}
          </tbody>
        </table>
        <h2>Content</h2> {/*h1 and h2 are wrapped in div element */}
        <i data-myattribute = "new">This is it</i> {/* custom attribute must have data prefix*/}
        <h3>{23+7}</h3> {/* javascript expressions*/}
      </div>
    );
  }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.word}</td>
            <td>{this.props.data.reaction}</td>
         </tr>
      );
   }
}

// enables App.jsx to be imported
export default App;

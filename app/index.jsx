import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class Web extends React.Component {
  render () {
    return (
      <span>
        <h2>Web</h2>
        <AwesomeComponent color="blue" /><br />
        <img src="../public/img/party.jpg" />
        <p>Ea eripuit appareat his, ne mutat affert est, natum aliquam an sed. Te mel ubique postea signiferumque, ea mel tacimates convenire. Ornatus consequuntur concludaturque te sed, in mel amet debet iuvaret, ad feugiat sapientem ius. Ad eum nibh wisi. Cu vel epicuri intellegam, sea cu utinam docendi.</p>
      </span>
    );
  }
}

class About extends React.Component {
  render () {
    return (
      <span>
      <h2>About</h2>
      </span>
    );
  }
}

class Contact extends React.Component {
  render () {
    return (
      <h2>Contact</h2>
    );
  }
}

render(<Web/>, document.getElementById('web'));
render(<App/>, document.getElementById('app'));
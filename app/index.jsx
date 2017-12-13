import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

import Web from './Web.jsx';
import Blog from './Blog.jsx';

class Contact extends React.Component {
  render () {
    return (
      <span>
      <h2>Contact</h2>
      <p>something</p>
      <p className="mono">this should be in monospace.</p>
      </span>
    );
  }
}

render(<Web/>, document.getElementById('web'));
render(<About/>, document.getElementById('about'));
render(<Blog/>, document.getElementById('contact'));
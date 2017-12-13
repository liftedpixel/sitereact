import React from 'react';
import {render} from 'react-dom';
import post from './blog/asmr-and-sl.jsx';

class Blog extends React.Component {
  render () {
    console.log("hello");
    return (
      <span>
      <h2>Contact</h2>
      <p>{post}</p>
      <p className="mono">this should be in monospace.</p>
      </span>
    );
  }
}

export default Blog;
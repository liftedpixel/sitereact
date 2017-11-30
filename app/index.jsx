import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

const jammming = {title:"Jammming", url:["http://jammmmmmmmmmmming.surge.sh"], img:"../public/img/party.jpg", info:"Log in with Spotify to make and save playlists. That's 12 Ms."};
const github = {title:"GitHub", url:["https://github.com/liftedpixel","https://liftedpixel.github.io"], img:"../public/img/party.jpg", info:"There's just something about github"};

const sectionsWeb = [ jammming, github ];

class Web extends React.Component {
  constructor(props) {
    super(props);
    this.makeSections = this.makeSections.bind(this);
  }

  makeSections(sections) {
    let stuff = [];
    for (let section of sections) {
      let x = section.url.length;
      let urls = [];
      while (x >= 0) {
        urls.push(<a href={section.url[x]}>{section.url[x]}</a>);
        urls.push(<br/>);
        x--;
      }
      stuff.push(<span>
        <h3>{section.title}</h3>
        <img src={section.img} />
        {urls}
        <p>{section.info}</p>
      </span>);
    }
    return stuff;
  }

  render () {
    return (
      <span>
        <h2>Web</h2>
        <p>Information about my websights.</p>
        {this.makeSections(sectionsWeb)}
      </span>
    );
  }
}

class About extends React.Component {
  render () {
    return (
      <span>
      <h2>About</h2>
      <p>something</p>
      <p className="mono">this should be in monospace.</p>
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
render(<About/>, document.getElementById('about'));
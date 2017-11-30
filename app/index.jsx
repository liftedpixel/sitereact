import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

const jammming = {title:"Jammming", url:["http://jammmmmmmmmmmming.surge.sh"], img:"../public/img/party.jpg", info:"Log in with Spotify to make and save playlists. That's 12 Ms."};
const github = {title:"GitHub", url:["https://github.com/liftedpixel","https://liftedpixel.github.io"], img:"../public/img/party.jpg", info:"There's just something about github"};

const sectionsWeb = [ jammming, github ];

const string = 'Ea eripuit appareat his, ne mutat affert est, natum aliquam an sed. Te mel ubique postea signiferumque, ea mel tacimates convenire. Ornatus consequuntur concludaturque te sed, in mel amet debet iuvaret, ad feugiat sapientem ius. Ad eum nibh wisi. Cu vel epicuri intellegam, sea cu utinam docendi.';
class Web extends React.Component {
  constructor(props) {
    super(props);
    this.makeSections = this.makeSections.bind(this);
  }

  makeSections(sections) {
    let theHTML = "";
    for (let section of sections) {
      theHTML += section.title;
    }
    return theHTML;
  }

  render () {
    return (
      <span>
        <h2>Web</h2>
        <p>Information about my websights.</p>
        <span>{this.makeSections(sectionsWeb)}</span>
        <div>
          <h3>{jammming.title}</h3>
          <img src={jammming.img} />
          <a href={jammming.url[0]}>{jammming.url[0]}</a>
          <p>{jammming.info}</p>
        </div>
        <div>
          <h3>GitHub</h3>
          <img src="../public/img/party.jpg" />
          <a href="https://github.com/liftedpixel">github.com/liftedpixel</a>
          <a href="https://liftedpixel.github.io">liftedpixel.github.io</a>
          <p>GitHub pages links to Codecademy coursework.</p>
        </div>
        <p className="mono">this should be in monospace.</p>
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
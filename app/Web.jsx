import React from 'react';
import {render} from 'react-dom';

const jammming = {
  title:"Jammming",
  url:["http://jammmmmmmmmmmming.surge.sh"],
  img:"../public/img/jammming.png", info:"Log in with Spotify to make and save playlists. That's 12 Ms."
};
const github = {
  title:"GitHub",
  url:[
    "https://github.com/liftedpixel",
    "https://liftedpixel.github.io"
  ],
  img:"../public/img/github.png",
  info:"There's just something about github"
};
const codepen = {};
const sylveon = {};
const pixelplanet = {};
const neocities = {};
const va = {};
const enjoygum = {};
const blog = {};

const sectionsWeb = [ jammming, github ];
/*const sectionsWeb = [ jammming, github, codepen, sylveon, pixelplanet, neocities, va, enjoygum, blog ];*/

class Web extends React.Component {
  constructor(props) {
    super(props);
    this.makeSections = this.makeSections.bind(this);
  }

  makeSections(sections) {
    let stuff = [];
    for (let section of sections) {
      let x = section.url.length - 1;
      let urls = [];
      while (x >= 0) {
        urls.push(<a href={section.url[x]}>{section.url[x]}</a>, <br/>);
        x--;
      }
      stuff.push(<span><h3>{section.title}</h3><img className="webimg" src={section.img} />{urls}<p>{section.info}</p></span>);
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

export default Web;
import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <span>
        color: <span>{this.props.color}</span><br />
        Likes : <span>{this.state.likesCount}</span>
        <span><button onClick={this.onLike}>Like Me</button></span>
      </span>
    );
  }

}

export default AwesomeComponent;
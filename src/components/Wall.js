import React, { Component } from 'react';
import Picture from './Picture';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureMounted: false,
      straightenCount: 0
    };

    this.handleMountClick = this.handleMountClick.bind(this);
    this.handleStraightenClick = this.handleStraightenClick.bind(this);
  }

  handleMountClick() {
    let nextPictureMounted = !this.state.pictureMounted;
    this.setState({ pictureMounted: nextPictureMounted });
  }

  handleStraightenClick() {
    let nextStraightenCount = this.state.straightenCount + 1;
    this.setState({ straightenCount: nextStraightenCount });
  }

  render() {
    let buttonText,
        picture;

    if (this.state.pictureMounted) {
      picture = <Picture straightenCount={this.state.straightenCount} />;
      buttonText = 'Unmount Picture';
    } else {
      picture = null;
      buttonText = 'Mount Picture';
    }

    return(
      <div className="wall">
        {picture}
        <div className="topnav">
          <button onClick={this.handleMountClick} className="btn">{buttonText}</button>
          <button onClick={this.handleStraightenClick} className="btn">Straighten Picture</button>
        </div>
      </div>
    );
  }
}

export default Wall;

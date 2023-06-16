import React from 'react';
import './Track.css';

class Track extends React.Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button className="Track-action">{this.renderAction()}</button>
      </div>
    )
  }

  renderAction() {
    const symbol = '-' //remove this later and uncomment below
    //const symbol = isRemoval === true ? '-' : '+';
    return <button>{symbol}</button>
  }
}

export default Track;
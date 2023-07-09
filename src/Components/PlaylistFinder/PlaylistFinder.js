import React from 'react';
import './PlaylistFinder.css';

class PlaylistFinder extends React.Component {
  constructor(props) {
    super(props);
    
    this.close = this.close.bind(this);
  }

  close() {
    this.props.onClose();
  }

  render() {
    return (
      <div className="PlaylistFinder">
        {/* <button className="close" onClick={this.close}>Close</button>
        <div className="user-lists">
          {this.props.userPlaylists.forEach(playlist => {
            return playlist.name;
          })}
        </div> */}
      </div>
    )
  }
}

export default PlaylistFinder;
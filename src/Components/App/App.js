import React from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'Worm Song', artist: 'Liberty Cage', album: 'New Beef EP', id: 1}, 
      {name: 'Little Star', artist: 'Liberty Cage', album: 'New Beef EP', id: 2},
      {name: 'Fever Pitch', artist: 'Liberty Cage', album: 'New Beef EP', id: 3}],
      playlistName: 'Simon\'s Best Tunes',
      playlistTracks: [
        {name: 'Milker', artist: 'Liberty Cage', album: 'Artificial Harmonies', id: 69},
        {name: 'Banshee', artist: 'Mutagen', album: 'New Survial Horror Game Soundtrack', id: 13},
        {name: 'The Euphoric', artist: 'Liberty Cage', album: 'Artifical Harmonies', id: 0},
        {name: 'Mutagen Anthem', artist:'Mutagen', album: 'Cool Industrial Shart', id: 'balls'},
        {name: 'Fuzzlove', artist:'Lost Sock Army', album: 'Pandas With Uzis', id: 99},
        {name: 'Juicy Juicy Green Grass', artist: 'Peter Combe', album: 'Toffee Apple', id: 'baa'}
      ]
    };
  }

  addTrack(track) {
    
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <SearchBar /> */}
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlist={this.state.playlist} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

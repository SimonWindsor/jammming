import React from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'Worm Song', artist: 'Liberty Cage', album: 'New Beef EP', id: 1}, 
        {name: 'Little Star', artist: 'Liberty Cage', album: 'New Beef EP', id: 2},
        {name: 'Fever Pitch', artist: 'Liberty Cage', album: 'New Beef EP', id: 3},
        {name: 'Mutagen Anthem', artist:'Mutagen', album: 'Cool Industrial Shart', id: 'balls'}],
      playlistName: 'Simon\'s Best Tunes',
      playlistTracks: [
        {name: 'Milker', artist: 'Liberty Cage', album: 'Artificial Harmonies', id: 69},
        {name: 'Banshee', artist: 'Mutagen', album: 'New Survial Horror Game Soundtrack', id: 13},
        {name: 'The Euphoric', artist: 'Liberty Cage', album: 'Artifical Harmonies', id: 0},
        {name: 'Mutagen Anthem', artist:'Mutagen', album: 'Cool Industrial Shart', id: 'balls'},
        {name: 'Fuzzlove', artist:'Lost Sock Army', album: 'Pandas With Uzis', id: 99},
        {name: 'Juicy Juicy Green Grass', artist: 'Peter Combe', album: 'Toffee Apple', id: 'baa'}
      ]
    }
    
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id))
      return;

    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks.filter(removedTrack => removedTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  search(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist
              playlist={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

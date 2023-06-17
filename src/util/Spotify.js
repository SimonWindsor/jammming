const clientId = 'ce6d519bf2244a1582edb65e94194589';
const redirectUri = 'http://localhost:3000';
let token;

const Spotify = {
  getAccessToken() {
    if(token)
      return token;

    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiryMatch = window.location.href.match(/expires_in=([^&]*)/);

    if(tokenMatch && expiryMatch) {
      token = tokenMatch[1];
      const expiresIn = Number(expiryMatch[1]);

      window.setTimeout(() => token = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return token;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  async search(term) {
    const accessToken = Spotify.getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    const jsonResponse = await response.json();
    if (!jsonResponse.tracks) {
      return [];
    }
    return jsonResponse.tracks.items.map(track => ({
      id: track.is,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    }));
  },

  savePlaylist(name, trackUris) {
    if(!name || !trackUris.length)
      return;
    
      const accessToken = Spotify.getAccessToken();
      const headers = { Authorization: `Bearer ${accessToken}`};
      let userId;

      return fetch('https://api.spotify.com/v1/me', { headers: headers }
      ).then(response => response.json()
      ).then(jsonResponse => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          headers: headers,
          method: 'POST',
          body: JSON.stringify( {name: name} )
        }).then(response => response.json()
        ).then(jsonResponse => {
          const playlistId = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
            {
              headers: headers,
              method: 'POST',
              body: JSON.stringify({ uris: trackUris })
            })
        })
      })
  }
}

export default Spotify;
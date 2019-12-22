import React, { Component } from 'react';
import Search from './sub/Search';
import Artist from './sub/Artist';
import Track from './sub/Track';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class Music extends Component {
    state = { artist: null, tracks: [] };
    componentDidMount() {
        this.searchArtist('Ilayaraja');
    }
    searchArtist = artistQuery => {
        fetch(`${API_ADDRESS}/artist/${artistQuery}`).then(response => response.json()).then(json => {
            console.log(json);

            if (json.artists.total > 0) {
                const artist = json.artists.items[0];
                this.setState({ artist });

                //api to call all tracks
                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`).then(response => response.json()).then(json => {
                    console.log(json.tracks);
                    this.setState({ tracks: json.tracks });
                }).catch(error => alert(console.error.message));
            }



        }).catch(error => alert(console.error.message))
    }
    render() {
        return (
            <div className="container" >
                <Search search={this.searchArtist} ></Search>
                <Artist artist={this.state.artist}></Artist>
                <Track tracks={this.state.tracks}></Track>

            </div>
        );
    }
}

export default Music;
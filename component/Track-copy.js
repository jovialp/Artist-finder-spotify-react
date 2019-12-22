import React, { Component } from "react";

class Track extends Component {
  state = {
    playing: false,
    audio: null,
    playingPreviewUrl: null
  };

  //audio player play pause control logic
  playAudio = previewUrl => () => {
    const audio = new Audio(previewUrl);

    if (!this.state.playing) {
      //playing controll of audio
      audio.play();
      this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
    } else {
      //audio player has to pause
      this.state.audio.pause();

      //pause and play logic
      if (this.state.playingPreviewUrl === previewUrl) {
        this.setState({ playing: false });
      } else {
        //from pause to play
        audio.play();
        this.setState({ audio, playingPreviewUrl: previewUrl });
      }
    }
  };
  //audio player play pause control logic ends

  //audio player icon control
  trackIcon = track => {
    if (!track.preview_url) {
      return <span className="text-danger">N/A</span>;
    }
    if (
      this.state.playing &&
      this.state.playingPreviewUrl === track.preview_url
    ) {
      return <span className="glyphicon glyphicon-pause" />;
    }
    return <span className="glyphicon glyphicon-play" />;
  };
  render() {
    const { tracks } = this.props;
    return (
      <div className="row">
        
        {tracks.map(track => {
          const { id, name, album, preview_url } = track;

          return (
            <div
              key={id}
              onClick={this.playAudio(preview_url)}
              className="col-xs-12 col-sm-6 col-md-3"
            >
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h1 className="panel-title">{name}</h1>
                </div>
                <div className="panel-body">
                  <img
                    src={album.images[0].url}
                    alt=""
                    className="img-responsive img-thumbnail"
                  />
                </div>
                <div className="panel-footer">
                  <h3 style={{ cursor: "pointer" }}>
                    {" "}
                    {this.trackIcon(track)}{" "}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Track;

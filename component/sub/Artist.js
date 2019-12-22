import React from "react";

const Artist = ({ artist }) => {
  if (!artist) return null;

  const { name, followers, genres, images, popularity } = artist;
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 box">
        <div className="col-xs-12">
          <h1 className="text-center">{name}</h1>
        </div>
        <div className="col-xs-12 col-md-5 text-center">
          <img
            src={images[0] && images[0].url}
            style={{ width: 200, height: 200 }}
            alt=""
            className="img-responsive img-thumbnail img-circle box-img"
          />
        </div>
        <div className="col-xs-12 col-md-7">
          <div className="artist-details">
            <ul className="list-group">
              <li className="list-group-item">
                <div className="row">
                  <div className="col-xs-5 col-md-4">
                    <span className="users" /> Followers
                  </div>
                  <div className="col-xs-7 col-md-8">
                    <span className="genre-right">
                      {" "}
                      <span className="badge">{followers.total}</span>
                    </span>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-xs-5 col-md-4">
                    <span className="genres" /> Geners
                  </div>
                  <div className="col-xs-7 col-md-8">
                    <span className="genre-right">
                      {genres.map(genre => {
                        return <span key={genre} className="badge">{genre}</span>;
                      })}
                    </span>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-xs-5 col-md-4">
                    <span className="love" /> Popularity
                  </div>
                  <div className="col-xs-7 col-md-8">
                    <span className="genre-right">
                      {" "}
                      <span className="badge">{popularity}</span>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;

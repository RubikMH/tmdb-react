import React from "react";
import "./Movie.css";
import { useMoviesDB } from "../../hooks/useMoviesDB";
import ImgSrc from "../../Component/helpers/ImgSrc";
import ConvertTimes from "../../Component/helpers/ConvetTimes";
// import HandelReleaseData from "../../Component/helpers/HandelReleaseData";
import { useLocation } from "react-router-dom";

export default function Movie() {
  const Location = useLocation();

  const { data, loading } = useMoviesDB(Location.pathname);

  // const releaseDate = data.release_date;

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div
          className="movie"
          style={{
            backgroundImage: `url(${ImgSrc(data.backdrop_path, "w780")})`,
            width: "100%",
            height: "100%",
          }}
        >
          <div className="card-movie">
            <div>
              <img
                src={ImgSrc(data.poster_path, "w500")}
                alt={data.title}
                className="img-movie"
              />
            </div>
            <div className="about">
              <h2 className="title">{data.title}</h2>
              <div className="info">
                <div className="Date">
                  <span className="release_date">{`${data.release_date.slice(
                    0,
                    4
                  )}`}</span>
                  <span className="release_date">
                    {ConvertTimes(data.runtime)}
                  </span>
                  <span className="release_date">
                    {data.genres.map((genre) => ` (${genre.name}) `)}
                  </span>
                </div>
              </div>
              <h4 className="tagline">{`The purpose of the film : ${data.tagline}`}</h4>
              <span className="overview">{data.overview}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

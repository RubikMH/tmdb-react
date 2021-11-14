import React from "react";
import "./Movie.css";
import { useMoviesDB } from "../../hooks/useMoviesDB";
import ImgSrc from "../../Component/helpers/ImgSrc";
import ConvertTimes from "../../Component/helpers/ConvetTimes";
// import HandelReleaseData from "../../Component/helpers/HandelReleaseData";
import { useLocation } from "react-router-dom";
// import stars from "../../Component/helpers/stars";
import { Progress } from "antd";
// import stars from "./helpers/stars";

export default function Movie() {
  const Location = useLocation();

  const { data, loading } = useMoviesDB(Location.pathname);

  // console.log(Location.pathname);

  // const releaseDate = data.release_date;

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div
          className="movie"
          style={{
            backgroundImage: `url(${ImgSrc(data.backdrop_path, "original")})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
          }}
        >
          <div className="bg1">
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
                <div className="avrg">
                  <Progress
                    type="circle"
                    strokeColor={
                      data.vote_average < 5
                        ? { "100%": "red" }
                        : data.vote_average < 7
                        ? { "100%": "orange" }
                        : { "100%": "green" }
                    }
                    style={{ transform: "scale(.5)" }}
                    percent={data.vote_average * 10}
                  />
                </div>
                <span className="overview">{data.overview}</span>
                <div className="div-btn">
                  <button className="btn-movie">watch the movie</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { useMoviesDB } from "../../hooks/useMoviesDB";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "antd";
import ImgCrc from "../helpers/ImgSrc";
import "./popSlider.css";

import "swiper/swiper-bundle.min.css";
import { Link } from "react-router-dom";
// import HandelUrl from "../helpers/HandelUrl";

export default function PopSlider() {
  const { Meta } = Card;
  const { data, loading } = useMoviesDB("movie/popular");
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <Swiper spaceBetween={0} slidesPerView={5}>
          {data.results.map((movie) => (
            <SwiperSlide>
              <Link to={`/movie/${movie.id}`}>
                <Card
                  hoverable
                  style={{ width: 240, borderRadius: 30 }}
                  cover={
                    <img
                      className="img-slider"
                      alt="example"
                      src={ImgCrc(movie.poster_path, "w500")}
                    />
                  }
                >
                  <span className="ScoreMovie">{movie.vote_average} </span>
                  <Meta title={movie.title} description={movie.release_date} />
                </Card>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

import React from "react";
import { useMoviesDB } from "../../hooks/useMoviesDB";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "antd";
import { Progress } from "antd";
import ImgCrc from "../helpers/ImgSrc";
import "./popSlider.css";

import "swiper/swiper-bundle.min.css";
import { Link } from "react-router-dom";
// import HandelUrl from "../helpers/HandelUrl";

export default function PopSlider() {
  const { Meta } = Card;
  const { data, loading } = useMoviesDB("movie/popular");
  // console.log(data.results[0].vote_average);
  // console.log(data);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <Swiper spaceBetween={0} slidesPerView={5}>
          {data.results.map((movie) => (
            <SwiperSlide key={movie.id}>
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
                  <Progress
                    type="circle"
                    strokeColor={
                      movie.vote_average < 5
                        ? { "100%": "red" }
                        : movie.vote_average < 7
                        ? { "100%": "orange" }
                        : { "100%": "green" }
                    }
                    style={{ transform: "scale(.5)" }}
                    percent={movie.vote_average * 10}
                  />
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

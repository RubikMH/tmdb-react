import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ImgCrc from "../helpers/ImgSrc";
import "./searchMovie.css";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { Progress } from "antd";
import "swiper/swiper-bundle.min.css";

export default function SearchPosts() {
  const [data, setData] = useState(null);
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${params.query}&api_key=0789d2e7e4ce91a53c04349a490ffe9e&language=en-US&page=1&include_adult=false`
      )
      .then((res) => setTimeout(setData(res.data), 5000));
  }, [params]);

  // console.log(data);
  const { Meta } = Card;

  return (
    <Row gutter={[0, 50]}>
      {data ? (
        data.results.map((movie) => (
          <Col span={6} key={movie.id}>
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
          </Col>
        ))
      ) : (
        <h2>loading</h2>
      )}
    </Row>
  );
}

// axios
// .get(
//   `https://api.themoviedb.org/3/search/movie?query=${params}&api_key=0789d2e7e4ce91a53c04349a490ffe9e&language=en-US&page=1&include_adult=false`
// )
// .then((res)=>);

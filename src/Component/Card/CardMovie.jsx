import React from "react";
import { Card } from "antd";
import ImgCrc from "../helpers/ImgSrc";

export default function CardMovie() {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={ImgCrc()} />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
}

import React from "react";

import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";

import { Col } from "reactstrap";
import { Blog } from "./blog";

const blogData = [
  {
    image: bg1,
    title: "Plural was once singular",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Jazzy and stuff",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Boss and boss",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Hero is a hero",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

type Props = {};

export const BlogsList = (props: Props) => {
  return (
    <>
      {blogData.map((blg, index) => (
        <Col sm="6" lg="6" xl="3" key={index} className={"blog" + index + 1}>
          <Blog
            image={blg.image}
            title={blg.title}
            subtitle={blg.subtitle}
            text={blg.description}
            color={blg.btnbg}
          />
        </Col>
      ))}
    </>
  );
};

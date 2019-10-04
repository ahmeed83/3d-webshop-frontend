import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("../assets/3d-blue.jpg"),
    // altText: "Slide 1",
    caption: ""
    // header: "Slide 1 Header"
  },
  {
    src: require("../assets/3d-yellow.png"),
    caption: ""
  },
  {
    src: require("../assets/3d-blue-yellow.jpg"),
    caption: ""
  }
];

const ProductCarouse = () => (
  <UncontrolledCarousel
    captionText={items.caption}
    key={items.src}
    items={items}
  />
);

export default ProductCarouse;

import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/67314724_2925392360867250_6633650372483219456_n.jpg?_nc_cat=105&_nc_oc=AQmasGIPGvwH4aQ1Nf9HfP0UD-qPZjip941Dk2SGpEOUxYs7Osp7b14oQAbzWGbmYjTqx-IOq1b9vo03pj9vmhg2&_nc_ht=scontent-ams4-1.xx&oh=c8e8c0bd39ba96c2166ca8a5bc374baa&oe=5DF437D4",
    // altText: "Slide 1",
    // caption: "Slide 1",
    // header: "Slide 1 Header"
  },
  {
    src: "https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/67314724_2925392360867250_6633650372483219456_n.jpg?_nc_cat=105&_nc_oc=AQmasGIPGvwH4aQ1Nf9HfP0UD-qPZjip941Dk2SGpEOUxYs7Osp7b14oQAbzWGbmYjTqx-IOq1b9vo03pj9vmhg2&_nc_ht=scontent-ams4-1.xx&oh=c8e8c0bd39ba96c2166ca8a5bc374baa&oe=5DF437D4",
  },
  {
    src: "https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/67314724_2925392360867250_6633650372483219456_n.jpg?_nc_cat=105&_nc_oc=AQmasGIPGvwH4aQ1Nf9HfP0UD-qPZjip941Dk2SGpEOUxYs7Osp7b14oQAbzWGbmYjTqx-IOq1b9vo03pj9vmhg2&_nc_ht=scontent-ams4-1.xx&oh=c8e8c0bd39ba96c2166ca8a5bc374baa&oe=5DF437D4",
  }
];

const ProductCarouse = () => <UncontrolledCarousel items={items} />;

export default ProductCarouse;

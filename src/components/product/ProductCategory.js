import React, { useState, useEffect } from "react";

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   ListGroup,
//   ListGroupItem
// } from "reactstrap";

const ProductCategory = () => {
  useEffect(() => {
    fetchCategories();
  }, []);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const data = await fetch("/api/products/categories");
      const categories = await data.json();
      setCategories(categories);
    } catch (error) {
      console.log("reason: " + error);
    }
  };

  return "";
  //   <Card body>
  //   <CardHeader>Categories</CardHeader>
  //   <CardBody>
  //     {categories.map(category => (
  //       <ListGroup flush key={category.id}>
  //         <ListGroupItem tag="a" href="#">
  //           {category.name}
  //         </ListGroupItem>
  //       </ListGroup>
  //     ))}
  //   </CardBody>
  // </Card>
};

export default ProductCategory;

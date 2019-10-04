import React, { useState, useEffect } from "react";
import PackageContext from "./context";

const ListProductsProvider = props => {

  useEffect(() => {
    fetchProducts();
  }, []);

  const [getProducts, setProducts] = useState([]);
  const [, setDeleteProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await fetch("/api/products");
      const products = await data.json();
      setProducts(products);
    } catch (error) {
      console.log("reason: " + error);
    }
  };

  const deleteProduct = id => {
    fetch(`/api/products/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id })
    }).then(res => res.text()); // OR res.json()
    window.location.reload(false);
  };

  return (
    <PackageContext.Provider
      value={{
        products: getProducts,
        deleteProduct: (product) => {
          setDeleteProducts(deleteProduct(product))
        }
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default ListProductsProvider;

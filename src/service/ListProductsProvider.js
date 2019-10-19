import React, { useState, useEffect } from "react";
import PackageContext from "./context";

const ListProductsProvider = props => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();    
  }, [products.length]);

  const fetchProducts = async () => {
    try {
      const data = await fetch("/api/products");
      const products = await data.json();
      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.log("reason: " + error);
    }
  };

  const deleteProduct = product => {
    fetch(`/api/products/${product.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: product.id })
    });
    setProducts(products.filter(item => !products.includes(item)));
  };

  return (
    <div>
      {loading ? (
        <div>...loading</div>
      ) : (
        <div>
          <PackageContext.Provider
            value={{
              products: products,
              deleteProduct: deleteProduct
            }}
          >
            {props.children}
          </PackageContext.Provider>
        </div>
      )}
    </div>
  );
};

export default ListProductsProvider;

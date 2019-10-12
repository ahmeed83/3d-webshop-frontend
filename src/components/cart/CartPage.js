import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import CartCheckOut from "./CartCheckOut";
import CartListItem from "./CartListItem";
import CartEmptyPage from "./CartEmptyPage";

const CartPage = () => {
  useEffect(() => {
    fetchProducts();
  }, []);
  const [getCart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orderAvailable, setOrderAvailable] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await fetch("/api/shopping-cart");
      const cart = await data.json();
      setCart(cart);
      setCartItems(cart.shoppingCartItemEntities);

      if (cart.shoppingCartItemEntities.length === 0) {
        setOrderAvailable(false);
      }
    } catch (error) {
      console.log("reason: " + error);
      setOrderAvailable(false);
    }
  };

  return (
    <Container className="text-dark">
      {orderAvailable ? (
        <div>
          <CartCheckOut value={getCart} />
          <CartListItem cartItems={cartItems} setCartItems={setCartItems} setOrderAvailable={setOrderAvailable}/>
        </div>
      ) : (
        <CartEmptyPage />
      )}
    </Container>
  );
};

export default CartPage;

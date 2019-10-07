import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import CartCheckOut from "./CartCheckOut";
import CartListItem from "./CartListItem";
import CartEmptyPage from "./CartEmptyPage";

function CartPage() {
  useEffect(() => {
    fetchProducts();
  }, []);
  const [getCart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orderAvaliable, setOrderAvaliable] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await fetch("/api/shopping-cart");
      const cart = await data.json();
      setCart(cart);
      setCartItems(cart.shoppingCartItemEntities);
      
      if (cart.shoppingCartItemEntities.length === 0) {
        setOrderAvaliable(false);
      }
    } catch (error) {
      console.log("reason: " + error);
      setOrderAvaliable(false);
    }
  };

  return (
    <Container className="text-dark">
      {orderAvaliable ? (
        <div>
          <CartCheckOut value={getCart} />
          <CartListItem value={cartItems} />
        </div>
      ) : (
        <CartEmptyPage />
      )}
    </Container>
  );
}

export default CartPage;

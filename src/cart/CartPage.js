import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import CardCheckout from "./CardCheckout";
import CardListItem from "./CardListItem";
import CardEmptyPage from "./CardEmptyPage";

function CartPage() {
  useEffect(() => {
    fetchProducts();
  }, []);
  const [getCart, setCart] = useState([]);
  const [cardItems, setCardItems] = useState([]);
  const [orderAvaliable, setOrderAvaliable] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await fetch("/api/shopping-card");
      const cart = await data.json();
      setCart(cart);
      setCardItems(cart.shoppingCardItemEntities);
      
      if (cart.shoppingCardItemEntities.length === 0) {
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
          <CardCheckout value={getCart} />
          <CardListItem value={cardItems} />
        </div>
      ) : (
        <CardEmptyPage />
      )}
    </Container>
  );
}

export default CartPage;

"use client";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const getDefaultCartState = () => ({
  products: [],
  quantity: 0,
  total: 0,
  type: "payement",
});
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : getDefaultCartState();
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        localStorage.removeItem("cart");
        return getDefaultCartState();
      }
    }
    return getDefaultCartState();
  });

  const addProduct = (product) => {
    setCart((prevCart) => {
      let updatedCart = {
        ...prevCart,
        products: [...prevCart.products, product],
        quantity: prevCart.quantity + 1,
      };
      if (product.sell_price && product.sell_price === "Ask for quotation") {
        updatedCart.type = "quotation";
        updatedCart.total = 0;
      } else {
        updatedCart.total = prevCart.total + product.sell_price * product.qty;
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeProduct = (productId) => {
    setCart((prevCart) => {
      const productToRemove = prevCart.products.find(
        (product) => product.id === productId
      );
      if (!productToRemove) return prevCart;

      const updatedProducts = prevCart.products.filter(
        (product) => product.id !== productId
      );
      const updatedQuantity = prevCart.quantity - 1;

      if (updatedProducts.length === 0) {
        removeAll();
        return getDefaultCartState();
      }

      // Check if any remaining product has 'Ask for quotation'
      const hasQuotation = updatedProducts.some(
        (product) => product.sell_price === "Ask for quotation"
      );

      // Calculate new total
      const newTotal = hasQuotation
        ? 0
        : updatedProducts.reduce((acc, product) => {
            const price =
              typeof product.sell_price === "number" ? product.sell_price : 0;
            return acc + price * (product.qty || 1);
          }, 0);

      const updatedType = hasQuotation ? "quotation" : "payement";

      const updatedCart = {
        ...prevCart,
        products: updatedProducts,
        quantity: updatedQuantity,
        total: newTotal,
        type: updatedType,
      };

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  const removeAll = () => {
    localStorage.removeItem("cart");
    setCart(getDefaultCartState());
  };

  const changeQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      const updatedCart = {
        ...prevCart,
        products: prevCart.products.map((product) => {
          if (product.id === productId) {
            return {
              ...product,
              qty: newQuantity > 0 ? newQuantity : 1, // Ensure quantity is at least 1
            };
          }
          return product;
        }),
        total: calculateTotal(prevCart.products, productId, newQuantity),
      };
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const calculateTotal = (products, productId, newQuantity) => {
    const updatedProduct = products.find((product) => product.id === productId);
    const prevTotal = products.reduce(
      (acc, product) => acc + product.sell_price * product.qty,
      0
    );
    return (
      prevTotal +
      (updatedProduct.sell_price * newQuantity -
        updatedProduct.sell_price * updatedProduct.qty)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        removeAll,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

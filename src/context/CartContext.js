import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartLS = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartLS);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, count) => {
    isInCart(item.id)
      ? setCart(
          cart.map((_item) => {
            if (_item.id === item.id) {
              _item.quantity += count;
            }
            return _item;
          })
        )
      : setCart([...cart, { ...item, quantity: count }]);
  };

  const increaseItems = ({ id }) => {
    let cartTemp = [];
    cartTemp = cart.reduce((acc, _item) => {
      if (id !== _item.id) {
        return acc.concat(_item);
      } else {
        return acc.concat({ ..._item, quantity: _item.quantity + 1 });
      }
    }, []);
    setCart(cartTemp);
  };

  const isInCart = (id) => {
    return cart.some((_item) => _item.id === id);
  };

  const removeItem = (id) => {
    setCart(cart.filter((_item) => _item.id !== id));
  };

  const cartClear = () => {
    setCart([]);
  };

  const totalPriceCart = () => {
    return cart.reduce((item, _item) => {
      return item + _item.quantity * _item.price;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        cartClear,
        cart,
        removeItem,
        totalPriceCart,
        increaseItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

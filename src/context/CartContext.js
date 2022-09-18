import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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
    console.log(cart);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

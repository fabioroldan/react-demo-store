import { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ defaultValue = [], children }) {
    const [cart, setCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);

    const addItem = (item, quantity) => {
        setTotalQty(totalQty + quantity)
        let pos = isInCart(item.id);
        if (pos >= 0) {
            let updatedCart = cart;
            updatedCart[pos] = { item, quantity: updatedCart[pos].quantity + quantity };
            setCart(updatedCart)
        } else {
            setCart([...cart, { item, quantity }]);
        }
    }

    const removeItem = (id) => {
        let pos = isInCart(id);
        let updatedCart = cart;
        updatedCart.splice(pos, 1);
        setCart(updatedCart);
    }

    const clear = (item, quantity) => {
        setCart([]);
    }

    const isInCart = (id) => {
        const cartLenght = cart.length;
        if (cartLenght === 0) {
            return -1;
        } else {
            for (let i = 0; i < cartLenght; i++) {
                if (cart[i].item.id === id) {
                    return i;
                }
            }
        }
    }

    const getItemQty = (id) => {
        const cartLenght = cart.length;
        if (cartLenght === 0) {
            return 0;
        } else {
            for (let i = 0; i < cartLenght; i++) {
                if (cart[i].item.id === id) {
                    return cart[i].quantity;
                }
            }
            return 0;
        }
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, getItemQty, totalQty }}>
            {children}
        </CartContext.Provider>
    );
}

function CartConsumer({ defaultValue = [], children }) {
    return (
        <CartContext.Consumer>
            {children}
        </CartContext.Consumer>
    );
}
export { CartProvider, CartConsumer, CartContext };
import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

function CartProvider({ defaultValue = [], children }) {
    const [cart, setCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = (e, item, quantity) => {
        e.preventDefault();
        let pos = isInCart(item.id);
        if (pos >= 0) {
            let updatedCart = cart;
            updatedCart[pos] = { item, quantity: updatedCart[pos].quantity + quantity };
            setCart(updatedCart)
        } else {
            setCart([...cart, { item, quantity }]);
        }
        getTotalPrice();
        getTotalQty();
    }

    const substractItem = (e, item, quantity) => {
        e.preventDefault();
        let pos = isInCart(item.id);
        if (pos >= 0) {
            let updatedCart = cart;
            updatedCart[pos] = { item, quantity: updatedCart[pos].quantity - quantity };
            setCart(updatedCart)
        } else {
            setCart([...cart, { item, quantity }]);
        }
        getTotalPrice();
        getTotalQty();

    }

    const removeItem = (pos) => {
        let updatedCart = cart;
        updatedCart.splice(pos, 1);
        setCart(updatedCart);
        getTotalPrice();
        getTotalQty();
    }

    const clear = () => {
        setCart([]);
        setTotalQty(0);
        setTotalPrice(0);
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

    const getTotalPrice = () => {
        let total = cart.reduce((acc, cur) => {
            return (cur.item.price * cur.quantity) + acc
        }, 0);
        setTotalPrice(total);
    }

    const getTotalQty = () => {
        let total = cart.reduce((acc, cur) => {
            return cur.quantity + acc
        }, 0);
        setTotalQty(total);
    }

    useEffect(() => {
        getTotalQty();
        getTotalPrice();
    });

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, substractItem, removeItem, clear, isInCart, getItemQty, totalQty, totalPrice }}>
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
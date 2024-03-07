import React, { createContext, useState, useReducer } from "react";

export const CartContext = createContext();
export const initialState = [];

export const ContextCart = ({ children }) => {
    const listReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case "[CART] ADD":
                const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
                if (existingItemIndex !== -1) {
                    const newState = [...state];
                    newState[existingItemIndex].quantity += 1;
                    return newState;
                } else {
                    return [...state, { ...action.payload, quantity: 1 }];
                }

            case "[CART] DELETE":
                return state.filter(item => item.id !== action.payload);

            case "[CART] more quantity":
                return state.map(item => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item);

            case "[CART] less quantity":
                return state.map(item => {
                    if (item.id === action.payload && item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });

            case "[CART] CLEAR":
                return initialState;

            default:
                return state;
        }
    };

    const [ProductsList, setProductsList] = useState(initialState);

    const [productsList, dispatch] = useReducer(listReducer, initialState);

    const add = (buy) => {
        buy.quantity = 1;
        const action = {
            type: "[CART] ADD",
            payload: buy
        };
        dispatch(action);
    };

    const delet = (id) => {
        const action = {
            type: "[CART] DELETE",
            payload: id
        };
        dispatch(action);
    };

    const qmore = (id) => {
        const action = {
            type: "[CART] more quantity",
            payload: id
        };
        dispatch(action);
    };

    const qless = (id) => {
        const action = {
            type: "[CART] less quantity",
            payload: id
        };
        dispatch(action);
    };

    const clearCart = () => {
        const action = {
            type: "[CART] CLEAR"
        };
        dispatch(action);
    };

    const [menu, setMenu] = useState(false);
    const [Cart, setCart] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const toggleCart = () => {
        setCart(!Cart);
    };

    return (
        <CartContext.Provider value={{ menu, initialState, Cart, toggleCart, toggleMenu, productsList, setProductsList, ProductsList, add, delet, qmore, qless, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

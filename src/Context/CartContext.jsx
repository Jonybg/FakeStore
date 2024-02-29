import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const ContextCart = ({ children }) => {
    const [menu, setMenu] = useState(false);
    const [Cart, setCart] = useState(false)
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
        console.log(data)
    };

    useEffect(() => {
        fetchData();
    }, []);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const toggleCart = () => {
        setCart(!Cart);
    };


    return (
        <CartContext.Provider value={{ menu, Cart, data, toggleCart, toggleMenu }} >
            {children}
        </CartContext.Provider>
    )

}
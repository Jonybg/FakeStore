import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext()

export const ContextProduct = ({ children }) => {
    const [data, setData] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(12);
    const [totalProducts, setTotalProducts] = useState(0);


    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setTotalProducts(data.length);
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 4);
    };

    const loadLessProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts - 4)


    }
    return (

        <ProductsContext.Provider value={{ data, visibleProducts, totalProducts, loadLessProducts, loadMoreProducts }} >
            {children}
        </ProductsContext.Provider>

    )

}
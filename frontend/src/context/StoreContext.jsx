import { createContext, useEffect, useState } from "react";
import { sweet_list, menu_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "http://localhost:4000";
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const currency = "₹";
    const deliveryCharge = 50;

    const addToCart = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: prev[itemId] - 1
        }));
    };

    const getTotalCartAmount = () => {
        let total = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = sweet_list.find(p => p._id === itemId);
                if (itemInfo) {
                    total += itemInfo.price * cartItems[itemId];
                }
            }
        }
        return total;
    };

    const contextValue = {
        url,
        sweet_list,      // ✅ THIS IS YOUR FOOD LIST
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        setCartItems,
        currency,
        deliveryCharge
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

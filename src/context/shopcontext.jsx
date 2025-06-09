import React,{createContext} from "react";
import all_products from "../components/assets/all_products";

export const ShopContext = createContext(null);

const getdefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= all_products.length; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cart, setCart] = React.useState(getdefaultCart());

    const addtocart = (itemId) => {
        setCart((prev) => {
            const newCart = { ...prev };
            newCart[itemId] = (newCart[itemId] || 0) + 1;
            console.log("Cart updated:", newCart); // Log the updated cart after increment
            return newCart;
        });
    }

    const removefromcart = (itemId) => {
        setCart((prev) => {
            const newCart = { ...prev };
            if (newCart[itemId] > 0) {
                newCart[itemId] -= 1;
            }
            return newCart;
        });
    };

    const contextvalue = {all_products , cart ,addtocart , removefromcart};

    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
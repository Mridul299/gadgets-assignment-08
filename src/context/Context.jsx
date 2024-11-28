import { createContext, useContext, useEffect, useState } from "react";
import {
  addToCartLocalStorage,
  addToWishListLocalStorage,
  getStoredCartData,
} from "../utility/addToCartLocalStorage"

export const GadgetContext = createContext({
  product: [],
  addGadgetToCart: () => {},
  addToWishlist: () => {},
  removeGadget: () => {},
  getProductsByCategory: () => {},
  getProductById: () => {},
});

const ContextProvider = ({ children = {} }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [upDate, setUpDate] = useState(false);
  const [wishList, setWishList] = useState([]);
  const [cart, setCart] = useState([]);

  const getProductsByCategory = (category) => {
    setFilteredProducts(
      products.filter((product) => product.category.name === category)
    );
  };

  const getProductById = (id) => {
    return products.find((product) => product.product_id === id);
  };

  const addGadgetToCart = (id) => {
    addToCartLocalStorage(id);
    setUpDate(!upDate);
  };

  const addToWishlist = (id) => {
    addToWishListLocalStorage(id);
    setUpDate(!upDate);
  };

  const quantity = (arr) => {
    let count = arr?.reduce((acc, item) => {
      if (!acc[item]) {
        acc[item] = 1;
      } else {
        acc[item] += 1;
      }
      return acc;
    }, {});

    return count;
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setCategory(
          data.reduce((acc, item) => {
            if (!acc.includes(item.category.name)) {
              acc.push(item.category.name);
            }
            return acc;
          }, [])
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const getCartData = getStoredCartData();
    setCart(getCartData);
  }, [upDate]);

  return (
    <GadgetContext.Provider
      value={{
        products,
        setProducts,
        category,
        setCategory,
        getProductsByCategory,
        getProductById,
        filteredProducts,
        addGadgetToCart,
        addToWishlist,
        upDate,
        wishList,
        setWishList,
        cart,
        quantity,
      }}
    >
      {children}
    </GadgetContext.Provider>
  );
};

export const useGadgetContext = () => {
  return useContext(GadgetContext);
};

export default ContextProvider;
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

import Sidebar from "./Components/Sidebar/sidebar";
import Topnav from "./Components/topnav/topnav";

import Library from "./pages/library";
import Home from "./pages/home/home";
import Store from "./pages/store";
import Live from "./pages/live";
import Friends from "./pages/friends";
import Cart from "./pages/cart/cart";
import Settings from "./pages/settings";

import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "./features/cartSlice";
import Product from "./pages/product/product";

export const ThemeContext = createContext(null);

function App() {
  //for cart totals
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const [theme, setTheme] = useState("Dark");
  //  simple toggle function to swap between themes
  const toggleTheme = () => {
    setTheme((curr) => (curr === "Dark" ? "Light" : "Dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <ToastContainer />
        <Sidebar />
        <Topnav />
        {/**my side bar component. ps: independent of the pages  */}
        <Routes>
          <Route index element={<Store />} />
          {/* Routes Nesting for Store */}
          <Route path="/store/*" element={<Store />} />
          <Route path="/home" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/live" element={<Live />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="*"
            element={<h1>Not found 404 .....Not found 404...Not found 404</h1>}
          />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

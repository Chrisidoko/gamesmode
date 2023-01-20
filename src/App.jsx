import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar/sidebar";
import Library from "./pages/library";
import Home from "./pages/home";
import Store from "./pages/store";
import Live from "./pages/live";
import Friends from "./pages/friends";
import { createContext, useState } from "react";
import Downloads from "./pages/downloads";
import Settings from "./pages/settings";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("Dark");
  //  simple toggle function to swap between themes
  const toggleTheme = () => {
    setTheme((curr) => (curr === "Dark" ? "Light" : "Dark"));
  };

 

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      
        <div id={theme}>
          <Sidebar />

          {/**my side bar component. ps: independent of the pages  */}
          <Routes>
            <Route index element={<Store />} />
            {/* Routes Nesting for Store */}
            <Route path="/store/*" element={<Store />} />
            <Route path="/home" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/live" element={<Live />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="*"
              element={
                <h1>Not found 404 .....Not found 404...Not found 404</h1>
              }
            />
          </Routes>
          
        </div>
      
    </ThemeContext.Provider>
  );
}

export default App;

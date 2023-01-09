import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar/sidebar";
import Library from "./pages/library";
import Home from "./pages/home";
import Store from "./pages/store";

function App() {
  return (
    <BrowserRouter>
    <>
    <Sidebar/>{/**my side bar component. ps: independent of the pages  */}
      <Routes>
        <Route index element={<Store />}/>
        <Route path="store" element={<Store />}/>
        <Route path="home" element={<Home />}/>
        <Route path="library" element={<Library />}/>
        <Route path="*" element={<h1>Not found 404 .....Not found 404...Not found 404</h1>}/>
      </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Products from "./Components/Products";
import Widgets from "./Components/Widget";

export const config = {
  endpoint: `http://localhost:5000`,
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/products" Component={Products} />
        <Route path="/widgets" Component={Widgets} />
      </Routes>
    </div>
  );
}

export default App;

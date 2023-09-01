import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Products from "./Components/Products";
import Widgets from "./Components/Widget";
import Loading from "./Components/Animations/LoadingAnimation";
import { useState, useEffect } from "react";

export const config = {
  endpoint: `http://localhost:5000`,
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (You can replace this with your actual loading logic)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/products" Component={Products} />
            <Route path="/widgets" Component={Widgets} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;

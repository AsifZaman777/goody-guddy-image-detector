import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { Route } from "react-router-dom";
import "./App.css";


function App() {

  return (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/home" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
  )
}

export default App

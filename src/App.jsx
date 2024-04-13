import { Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";


function App() {

  return (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
  )
}

export default App

import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom/dist";
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   return <div className="bg-richblack-900 flex flex-col h-screen">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
         <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
               <Dashboard />
            </PrivateRoute>
         } />
         <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
   </div>;
}

export default App;

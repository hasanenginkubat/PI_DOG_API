import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "../src/components/Home/home";
import Nav from "../src/components/Nav/nav";
import About from "../src/components/about/about";
import Card from "../src/components/Card/Card";
import Favorites from "../src/components/Favorites/favorite";
import Form from "./components/Form/form";
import config from "./config";
import { useSelector } from "react-redux";
import CreateDog from "./components/createDog/createDog"
import Details from "./components/Details/details"
import FilterTemps from "./components/FilterTemps/FilterTemps"

function App() {
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const { e, p } = config;
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    if (password === p && email === e) {
      setAccess(true);
    } else {
      setAccess(false);
    }
    console.log(password,p,email,e)
    
  }, [password, email, p, e]);

  useEffect(() => {
    if (!access && location.pathname !== "/") {
      navigate("/");
    }
  }, [access, navigate, location]);

  useEffect(() => {
    if (access && location.pathname === "/") {
      navigate("/home");
    }
  }, [access, navigate, location]);

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav />}
      {location.pathname === "/home" && <Card />}
      
      <Routes>
        <Route path="/" element={<Form />} />
        {access && (
          <>
          
            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/createDog" element={<CreateDog />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/filterTemperament" element={<FilterTemps />} />
          </>
        )}
      </Routes>
      
    </div>
  );
  
}

export default App;

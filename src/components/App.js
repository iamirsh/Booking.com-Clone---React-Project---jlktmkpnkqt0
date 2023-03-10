import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Login from "./Login/Login";
import Master from "./Flight/Master";
import MasterHotel from "./Hotel/MasterHotel";
import Header from "./Header/Header";
import Checkout from "./CheckOut/Checkout";
import FooterBlue from "./Footer/FooterBlue";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<MasterHotel />} />
        <Route exact path='/masterFlight' element={<Master />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/checkout' element={<Checkout />} />
      </Routes>
      <FooterBlue />
    </Router>
  );
};

export default App;

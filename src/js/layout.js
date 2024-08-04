import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Personajes from "./views/Personajes";
import PersonajeDetalle from "./views/PersonajeDetalle";

const Layout = () => {

  return (
    <div>
        <BrowserRouter >
          <ScrollToTop>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/personajes" element={<Personajes/>} />
              <Route path="/personajes/:uid" element={<PersonajeDetalle />} />

              <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import MainNavigation from "./shared/navigation/MainNavigation";
import Main from "./main/Main";
import ScrollToTop from './shared/util/ScrollToTop';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <MainNavigation />
          <Routes>
            <Route exact path="/" element={<Main />} />
            {/*  <Route exact path="*" element={<Main />} /> */}
          </Routes>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;

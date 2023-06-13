import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import MainNavigation from "./shared/navigation/MainNavigation";
import Main from "./main/Main";

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <MainNavigation />
          <Main />
          {/* <Routes>
            <Route exact path="/" element={<Main />} />
          </Routes> */}
          {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

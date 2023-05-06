import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CordataClient from "./containers/CordataClient";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<CordataClient />} />
    </Routes>
    <p className="cordata-by">by: Hezron</p>
  </div>
);
export default App;

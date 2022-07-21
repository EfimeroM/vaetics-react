//@ts-check
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { DarkMode } from "./themes/DarkMode";
import { NavBar } from "./components/NavBar/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <DarkMode />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>probando darkmode</h1>
              <br />
              <h1>probando darkmode</h1>
              <br />
              <h1>probando darkmode</h1>
              <br />
              <h1>probando darkmode</h1>
              <br />
              <h1>probando darkmode</h1>
              <br />
              <h1>probando darkmode</h1>
              <br />
              <h1>probando darkmode</h1>
              <br />
              <h1>probando darkmode</h1>
              <br />
              <h1>probando darkmode</h1>
              <br />
              <h1>probando darkmode</h1>
              <br />
              <h1>probando darkmode</h1>
              <br />
              <h1>probando darkmode</h1>
              <br />
              <h1>probando darkmode</h1>
              <br />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { NavBar } from "./components/NavBar";
import { Carrito } from "./components/Carrito";
import { DataProvider } from "./context/DataProvider";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./components/Page.js";
import "boxicons";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <NavBar />
          <Carrito />
          <Pages />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;

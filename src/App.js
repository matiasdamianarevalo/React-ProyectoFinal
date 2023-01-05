import React from "react";
import { NavBar } from "./components/NavBar";
import { Checkout } from "./components/Checkout";
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
          <Checkout />
          <Pages />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;

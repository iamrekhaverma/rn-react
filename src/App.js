import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import HomeLayout from "./layout/HomeLayout";
import Items from "./screens/items";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomeLayout} />
        <Route path="/items" component={Items} />
      </Router>
    </div>
  );
}

export default App;

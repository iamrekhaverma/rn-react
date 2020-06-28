import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./App.css";
import HomeLayout from "./layout/HomeLayout";
import Items from "./screens/items";
import Reports from "./screens/reports";
import { theme } from "./theme";

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/items" component={Items} />
            <Route path="/reports" component={Reports} />
            <Route path="/" component={HomeLayout} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;

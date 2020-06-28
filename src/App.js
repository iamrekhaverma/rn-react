import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./App.css";
import HomeLayout from "./layout/HomeLayout";
import Items from "./screens/items";
import PaymentReports from "./screens/payment-reports";
import { theme } from "./theme";
import Reports from "./screens/reports";
import NoMatch from "./components/NoMatch";

// Localization
import "./i18n/i18n";

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={HomeLayout} />
            <Route path="/items" component={Items} />
            <Route path="/reports" component={Reports} />
            <Route path="/payment-reports" component={PaymentReports} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;

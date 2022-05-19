import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";
import "./App.css";
import Layout from "./components/Layout";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;

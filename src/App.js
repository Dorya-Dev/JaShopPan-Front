import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Account from "./Components/Account/Account";
import Cart from "./Components/Cart/Cart";
import Accueil from "./Components/Accueil/Accueil";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/account" component={Account} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/accueil" component={Accueil} exact />
        <Route path="/content" component={Content} exact />
        <Route path="/products" component={Products} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

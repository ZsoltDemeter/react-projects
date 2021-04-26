import React from "react";
import Nav from "./components/Nav";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Item from "./components/ItemDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Item} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
